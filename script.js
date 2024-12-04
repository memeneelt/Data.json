function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
        let journal = data.journal;
        //console.log(journal);
        

        affichernomJournal(journal);



    // Afficher l'objet journal dans la console
    //console.log(journal);
    
    // Travailler sur l'article principal
    let articlePrincipal = journal.articlePrincipal;
    let container = document.getElementById('article-principal');
    // console.log(articlePrincipal);

    let articles = journal.articles;
    
   
    afficherArticle(articlePrincipal, container);
    //console.log(articlePrincipalHTML);
    afficherArticles(articles);


     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
     
    }

    getData();

    
    // Fonction pour afficher un article
    function afficherArticle(article, container) {
      let titre = article.titre;
      let description = article.description;
      let date = article.date;
      let theme = article.theme;
      let image = article.image;
      
        let element = `
            <div class="article">
                <h2>${titre}</h2>
                <p>${date}</p>
                <span>${theme}</span>
                <img src="${image}" alt="${theme}">
            </div>
        `;
        container.insertAdjacentHTML('beforeend', element);
    }
    
    function afficherArticles(articles) {
    // Sélectionner le conteneur des articles et afficher tous les articles
    console.log(articles);
    
    articles.forEach(article => {

     let articleCard = ` <div class="article">
      <h2>${article.titre}</h2>
      <p>${article.date}</p>
      <span>${article.theme}</span>
      <img src="${article.image}" alt="${article.theme}">
  </div>
`;

let container = document.getElementById('articles');
container.insertAdjacentHTML('beforeend', articleCard);

  });

  }


    function affichernomJournal(journal) {

      //* définir la variable nom du journal = on va chercher la donnée dans la base de donnéee
      let nomJournal= journal.nomJournal;
      // let taVariableNomJounral = tu vas chercher la donnée;
      console.log(nomJournal);

      // ici on définit ce que l'on veut intégrer au html
      let element =`<h1>${nomJournal}</h1>`;

      //* sélection du header avec query Selector - le conteneur de ta variable 
      let container= document.querySelector('header');


      //* injection *de l'élément 
      container.innerHTML= nomJournal;
      //* container.insertAdjacentHTML('beforeend', element);
    }