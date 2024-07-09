const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const compliments = [
    "Vous êtes un développeur fantastique !",
    "Vos compétences en matière de résolution de problèmes sont exceptionnelles !",
    "Vous écrivez un code magnifique et propre !",
    "Votre dévouement à l'apprentissage est une source d'inspiration !",
    "Vous avez le sens du détail !"
];

const roasts = [
    "Votre code est en désordre, mais vous essayez !",
    "Vous déboguez votre code avec des instructions d'impression, n'est-ce pas ?",
    "J'ai vu un meilleur code dans un tutoriel pour débutants",
    "Est-ce que vous testez votre code avant de le valider ?",
    "Vous écrivez du code comme si vous étiez payé à la ligne, n'est-ce pas ?"
];

app.get('/api/compliment', (req, res) => {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    res.json({ message: compliment });
});

app.get('/api/roast', (req, res) => {
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    res.json({ message: roast });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
