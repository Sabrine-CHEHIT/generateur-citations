const quotes = [
    {
      text: "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
      author: "Albert Einstein"
    },
    {
      text: "Le succès, c’est se promener d’échecs en échecs tout en restant motivé.",
      author: "Winston Churchill"
    },
    {
      text: "Tout ce que vous pouvez imaginer est réel.",
      author: "Pablo Picasso"
    },
    {
      text: "Fais de ta vie un rêve, et d’un rêve, une réalité.",
      author: "Antoine de Saint-Exupéry"
    },
    {
      text: "Commencez par faire ce qui est nécessaire, puis ce qui est possible, et soudain vous ferez l’impossible.",
      author: "Saint François d’Assise"
    }
  ];
  
  const quoteText = document.getElementById("quote");
  const quoteAuthor = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote");
  const copyBtn = document.getElementById("copy-quote");
  
  function afficherNouvelleCitation() {
    // Lancer animation de disparition
    quoteText.classList.remove("show");
    quoteAuthor.classList.remove("show");
  
    setTimeout(() => {
      // Choisir une citation
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const citation = quotes[randomIndex];
  
      // Mettre à jour le texte
      quoteText.textContent = citation.text;
      quoteAuthor.textContent = `– ${citation.author}`;
  
      // Afficher avec animation
      quoteText.classList.add("show");
      quoteAuthor.classList.add("show");
    }, 300);
  }
  
  // Copier la citation
  copyBtn.addEventListener("click", () => {
    const textToCopy = `"${quoteText.textContent}" ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Citation copiée ! 📋");
    });
  });
  
  // Événement bouton
  newQuoteBtn.addEventListener("click", afficherNouvelleCitation);
  
  // Affiche une citation au chargement
  afficherNouvelleCitation();
  