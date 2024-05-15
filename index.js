// Dipendenze
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

//configurazione server
const app = express();
const PORT = 8000;
const url = 'https://tg24.sky.it/';

//montaggio middleware per evitare errori cors
app.use(cors());

//recupero dati
app.get('/articles', async (req, res) => {
  try {

    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const articles = [];

//Per ogni tag H2 con classe c-card__title recuperiamo il testo al suo interno
    $('h2.c-card__title').each(function() {
      const title = $(this).text();
      articles.push({ title});
    });

    const links = [];

//Per ogni tag <a> con classe c-card recuperiamo l'attributo HREF
    $('a.c-card').each(function(){
      const link = $(this).attr('href');

      //Contorlliamo che non abbia valore NULL
      if(link){
        links.push(link)
      }
    })
    
    //cicliamo l'array dei titoli e sfruttiamo l'index per assegnare i link corrispondenti
    const articlesWithLinks = articles.map((article,index) => {
      return {
        title: article.title,
        link: links[index]
      };
    });
    res.json(articlesWithLinks);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
