# KingLeo-micro-chatbot
Création d'une interface utilisateur avec Chatbot...  
#### Nathalie Anneessens | Guillaume-Leo | Robbert Klockaerts | Christian Jadot

***

## Table des matières
1. [Les Étapes](#Les-Etapes)
2. [Organisation du travail](#Organisation-du-travail)
3. [La Mission](#La-Mission)
4. [Les Compétences](#Les-Compétences)
5. [Lien vers notre chatbot](#Lien-vers-notre-chatbot)
6. [Page Github](#Page-Github)
7. [Layout](#Layout)

***

<a name="Les-Etapes"></a>
## Les Étapes
1. Création branch dev
2. Création branch individuelles & FrontEnd / BackEnd
3. Discussion sur le travail à réaliser
4. Répartition des tâches Front / Back
5. Démarrage de la Mission

<a name="Organisation-du-travail"></a>
## Organisation du travail
- Création des équipes :
  - FrontEnd: Nathalie Anneessens & Christian Jadot
  - BackEnd: Guillaume & Robbert Klockaerts
  - gestion de projet: Christian Jadot

- Stratégie de déploiement:
  - Page Github
  - Mise en route de l'équipe Front & BackEnd

- Délais des réalisations
  - FrontEnd :
    - 15/02 : Création du layout, validation par l'équipe et démarrage de la mise en HTML/CSS.
              Création du layout de la conversation.
              Création de la structure dans le fichier html avec simulation de message et mise en page sommaire/fonctionnelle en CSS :
              - Adapter la taille de la bulle à la taille du contenu.
              - Aligner la bulle de l'utilisateur à droite.
              - Fixer le formulaire avec le text-area en bas.
    - 16/02 : Recherche du style visuel global, visuel du Bot, création d'un logo, interface générale, nuances.
              Regarder comment empêcher le resizing manuel d'un "textarea".
              Adapter le design avec les fichiers de Christian.
              Faire un design de mobile pour tout le site.
              Faire une recherche sur les iframes.
              Intégrer le contenu.
    - 17/02 : ! Vérification Validation W3C ! .... Git Conflits ?.............. Remise du projet final

  - BackEnd :
    - 15/02 : Tests sur les séquences des messages, analyse des faisabilités pour l'insertion de message dans du "textarea" et vérifier les dispositions des éléments dans l'ordre souhaité, vertical de bas en haut (saisie des messages dans le bas de la fenêtre, tandis que l'historique de ces messages se placent au-dessus de la saisie dans le sens, le plus ancien dans le haut de la liste) et gauche et droite, gauche pour les messages du "bot", droite pour les messages "utilisateurs"...
    - 16/02 : 
    - 17/02 : 

<a name="La-Mission"></a>
## La Mission
### Créer un chatbot
#### Fonctionnalités indispensables
Tout d'abord, vous aurez besoin d'une interface utilisateur, qui est juste une liste de messages (il existe deux types de messages - ceux des bots et ceux de l'utilisateur) et une zone de texte avec un bouton d' envoi .
L'envoi d'un message au bot se fait en cliquant sur le bouton d' envoi ou en tapant ENTER.
au chargement de la page, le bot accueille l'utilisateur avec un message d'accueil aléatoire (votre bot a besoin d' au moins trois messages d'accueil différents ), puis il demande à l'utilisateur "comment vous sentez-vous aujourd'hui?" .
L'utilisateur peut répondre librement, et le bot doit vérifier la réponse s'il peut trouver un "oui" ou un "non":
si le script trouve un "oui" dans le message, le bot répond avec une phrase aléatoire d'un ensemble spécifique (minimum trois différents )
si le script trouve un "non" dans le message, le bot répond avec une phrase aléatoire d'un ensemble spécifique (minimum trois différents )
si le script ne trouve pas un "oui" ou un "non" dans le message, le bot répondra par exemple "Je n'ai pas compris, pouvez-vous réessayer s'il vous plaît"
si le script ne peut pas trouver un "oui" ou un "non" dans le message après trois tentatives, le bot commence à être fou et utilise une réponse "passive-agressive", comme "mec, es-tu sûr que tu peux lire ?"
Après cette réponse, le bot a terminé sa routine. Il dit "au revoir" à l'utilisateur et la zone de texte passe en disabledmode.
#### Fonctionnalités bonus
- Prend en charge les messages multilignes : en tapant SHIFT+ENTER, vous créez une nouvelle ligne dans la zone de texte.
- Ajouter une animation "en cours" et un délai d'expiration pour simuler la "pensée de bot"
- Vous pouvez essayer de rendre le bot plus "réel" en ayant plus de réponses possibles pour interagir avec l'utilisateur.

<a name="Les-Compétences"></a>
## Les Compétences
- Compétences ** JavaScript **
- Compétences ** HTML5 / CSS3 / Bootstrap / Flex / Grid ** 
- compétences d'équipe
- compétences de conflit git

<a name="Lien-vers-notre-chatbot"></a>
## Lien vers notre chatbot  
[Voici le KingLeo Micro Chatbot](lien à copier/coller ici)

<a name="Page-Github"></a>
## Page Github
L'ensemble des éléments "Pages et dossiers" ont été placés sur Github.  
Voici le repo sur [Github](https://github.com/ChristianJadot/KingLeo-micro-chatbot/)

<a name=""></a>
## Layout
Ci-dessous les mock-up du site KingLeo-micro-chatbot.  
![Wireframe 1](layout-brouillon/layout-papier.jpg)<br>