const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 8000;
const url = 'https://tg24.sky.it/';

app.use(cors());

app.get('/articles', async (req, res) => {
  try {

    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const articles = [];

    $('h2.c-card__title').each(function() {
      const title = $(this).text();
      articles.push({ title});
    });

    const links = [];

    $('a.c-card').each(function(){
      const link = $(this).attr('href');
      if(link){
        links.push(link)
      }
    })
    console.log(articles.length)
    console.log(links.length)
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
