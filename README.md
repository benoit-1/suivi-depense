# Suivi pellets

Application pour noter chaque remplissage du poêle à granulés avec la température des pièces, et voir combien on consomme selon le froid dehors.

- **Le site** (ce fichier `index.html`) est publié avec GitHub Pages. Il ne contient aucune donnée.
- **Les données** sont dans un fichier `donnees.json`, rangé dans un **dépôt privé** que vous seuls pouvez voir. Chaque enregistrement y laisse une trace dans l'historique.
- **La météo** vient d'Open-Meteo, un service gratuit et sans inscription. L'application calcule la moyenne de chaque journée pour votre commune.

---

## Mise en route (environ 15 minutes, une seule fois)

### 1. Créer un compte GitHub

Si vous n'en avez pas encore : <https://github.com/signup> (gratuit).

### 2. Créer le dépôt du site (public)

1. En haut à droite, cliquez sur **+**, puis **New repository**.
2. Nom : `suivi-chauffage`. Visibilité : **Public**. Cliquez sur **Create repository**.
3. Sur la page du dépôt, cliquez sur **uploading an existing file**. Déposez `index.html` (et ce `README.md` si vous voulez), puis cliquez sur **Commit changes**.
4. Allez dans **Settings**, puis **Pages**. Dans **Branch**, choisissez `main` et `/ (root)`, puis cliquez sur **Save**.
5. Au bout d'une ou deux minutes, le site est en ligne à l'adresse
   `https://VOTRE-IDENTIFIANT.github.io/suivi-chauffage/`

> Le dépôt du site doit être public pour que GitHub Pages soit gratuit. Il ne contient que le programme, jamais vos relevés.

### 3. Créer le dépôt des données (privé)

1. Cliquez sur **+**, puis **New repository**.
2. Nom : `suivi-chauffage-donnees`. Visibilité : **Private**.
3. Cochez **Add a README file**, puis cliquez sur **Create repository**.

Vous n'avez rien d'autre à y mettre : l'application crée elle-même le fichier `donnees.json`.

### 4. Créer la clé d'accès (jeton)

C'est elle qui permet à l'application d'écrire dans le dépôt privé, et **seulement dans celui-là**.

1. Ouvrez <https://github.com/settings/personal-access-tokens/new>.
2. **Token name** : `Suivi chauffage`.
3. **Expiration** : choisissez la durée la plus longue proposée et notez la date. À l'échéance, il faudra recréer une clé.
4. **Repository access** : cochez **Only select repositories**, puis choisissez `suivi-chauffage-donnees`.
5. **Permissions**, puis **Repository permissions**, puis **Contents** : choisissez **Read and write**.
6. Cliquez sur **Generate token**, puis copiez la clé. Elle commence par `github_pat_` et ne s'affiche qu'une fois.

### 5. Connecter votre téléphone

1. Ouvrez l'adresse du site sur votre téléphone.
2. Indiquez votre identifiant GitHub, le dépôt (`suivi-chauffage-donnees`) et collez la clé.
3. Indiquez la commune, le code postal et les pièces, en mettant **en premier la pièce du poêle**.
4. Dans **Réglages**, renseignez « Qui utilise ce téléphone ? » : votre prénom apparaîtra dans le journal.
5. Ajoutez la page à l'écran d'accueil :
   - sur iPhone, Safari, bouton **Partager**, puis **Sur l'écran d'accueil** ;
   - sur Android, Chrome, menu **⋮**, puis **Ajouter à l'écran d'accueil**.

### 6. Connecter le téléphone de votre conjoint

1. Sur votre téléphone, allez dans **Réglages**, puis **Connecter un autre téléphone**, puis **Copier le code**.
2. Envoyez ce code par un message privé (SMS, WhatsApp). Il contient la clé : ne le publiez nulle part.
3. Sur son téléphone : elle ouvre l'adresse du site, touche **Vous avez reçu un code de connexion ?**, colle le code, puis **Utiliser ce code**.
4. Elle renseigne son prénom dans **Réglages**.

Vous travaillez ensuite tous les deux sur les mêmes données. Si vous enregistrez en même temps, l'application fusionne les saisies sans rien perdre.

---

## Utiliser l'application sans compte (stockage sur l'appareil)

C'est le plus simple pour un particulier : envoyez-lui seulement l'adresse du site.
1. Il ouvre l'adresse et touche **Commencer sur cet appareil**.
2. Il indique sa commune et ses pièces : c'est prêt. Pas de compte, pas de clé.

Ses relevés restent **sur son appareil uniquement**. Dans **Réglages**, puis **Mes données** :
- **Sauvegarder mes relevés** crée un fichier, à garder dans iCloud Drive, Google Drive ou par e-mail. L'accueil rappelle de le faire au bout d'un mois.
- **Restaurer ou ajouter un fichier** récupère une sauvegarde, sur un nouveau téléphone par exemple, ou ajoute les relevés d'un autre appareil de la famille, sans doublon.

Dans ce mode, les appareils d'une même famille ne se synchronisent pas tout seuls. Pour un suivi partagé automatiquement, utilisez plutôt un dépôt GitHub (ci-dessous).

## Installer l'application (pour tout le monde)

Dans **Réglages**, carte **Faire connaître l'application** : faites scanner le QR code ou envoyez le lien. Ou envoyez simplement l'adresse **https://benoit-1.github.io/suivi-chauffage/** à la personne. Elle n'a besoin d'aucun compte.

- **iPhone / iPad** : ouvrir le lien dans Safari, bouton Partager, puis « Sur l'écran d'accueil ».
- **Android** : ouvrir le lien dans Chrome, puis « Installer l'application » (bouton dans l'application ou menu ⋮).
- **Ordinateur** : Chrome ou Edge proposent « Installer » dans la barre d'adresse.

Ensuite elle touche **🔥 Commencer**. Ses relevés restent sur son appareil. Une fois installée, l'application s'ouvre même sans réseau (seule la météo attend le retour du réseau).

## Partager sur Facebook

Publiez simplement le lien **https://benoit-1.github.io/suivi-chauffage/** : Facebook affiche automatiquement la grande image d'aperçu (fichier `apercu-lien.png`), et toute l'image est cliquable. Le fichier `apercu-lien.png` doit donc être déposé sur GitHub avec les autres.

## Compteur d'utilisateurs

L'application peut envoyer un signal anonyme à GoatCounter (gratuit, sans cookie, sans bandeau de consentement). Aucun relevé, aucun nom, aucune commune n'est envoyé. Seuls ces événements sont comptés :

| Événement | Signification |
|---|---|
| nouvel-appareil | une nouvelle installation |
| mode-sans-compte / mode-github | le mode choisi à l'installation |
| appareil-actif-du-jour | un appareil utilisé ce jour-là (une fois par jour) |
| chargement | un chargement de pellets noté |
| partage | quelqu'un a envoyé ou copié le lien de l'application |

Le compteur est actif depuis la version 3.7. Les chiffres se lisent sur **https://suivi-pellets.goatcounter.com** (connexion avec votre e-mail et votre mot de passe GoatCounter). Chaque utilisateur peut couper l'envoi dans **Réglages**, **Statistiques anonymes : Non**.

## Connecter un poêle Jolly Mec (facultatif)

L'application peut lire votre poêle Jolly Mec : état (en marche, éteint, veille…), température de la pièce mesurée par le poêle, consigne, puissance, température des fumées et alarme. **Lecture seule** : elle ne peut ni allumer ni éteindre le poêle.

Elle passe par le même serveur que l'application **Jolly Mec Wi Fi** (plateforme Agua IOT de Micronova). Ce serveur refuse les demandes venant directement d'un navigateur : il faut donc un petit **relais** gratuit chez Cloudflare. Le relais transmet seulement et ne garde rien.

1. Créez un compte gratuit sur **https://dash.cloudflare.com/sign-up**.
2. Dans le menu, ouvrez **Compute (Workers)** puis **Workers & Pages**, et cliquez **Create** puis **Create Worker** (modèle « Hello World »).
3. Nommez-le `jollymec-relais`, puis **Deploy**.
4. Cliquez **Edit code**, effacez tout, collez le contenu du fichier **relais-jollymec.js**, puis **Deploy**.
5. Copiez l'adresse du relais, du type `https://jollymec-relais.VOTRE-NOM.workers.dev`.
6. Dans l'application : **Réglages**, carte **Poêle connecté (Jolly Mec)**. Collez l'adresse du relais, l'e-mail et le mot de passe de l'application Jolly Mec Wi Fi, puis **Connecter et tester**.

L'e-mail et le mot de passe restent sur l'appareil (ils ne sont pas dans le lien d'invitation). Ce n'est pas un accès officiel de Micronova : s'il change, la lecture du poêle peut s'arrêter, le reste de l'application continue de marcher.

## Partager l'application avec d'autres foyers

Tout le monde utilise la même adresse (votre site). Les autres foyers n'ont **rien à créer** : ni compte, ni GitHub.

**Une seule fois** (5 minutes) :
1. Sur GitHub, créez un dépôt **privé** `suivi-chauffage-foyers`, en mettant **Add README** sur **On**.
2. Créez une clé limitée à ce seul dépôt : **No expiration**, **Only select repositories**, puis `suivi-chauffage-foyers`, et **Contents : Read and write**.
3. Dans l'application : **Réglages**, puis **Ajouter un foyer**. Collez la clé, puis **Vérifier et enregistrer**.

**Pour chaque nouveau foyer** : **Réglages**, puis **Ajouter un foyer**, tapez son nom (par exemple « Dupont »), puis **Créer**. Envoyez le lien ou faites scanner le QR code. En l'ouvrant, le foyer indique sa commune et ses pièces. Il pourra ensuite inviter ses propres appareils.

Chaque foyer a son fichier à part dans le dépôt, et ne voit que ses relevés dans l'application. Les foyers partagent toutefois la même clé : une personne qui s'y connaît pourrait lire les autres fichiers. C'est réservé aux proches. Pour couper un accès, il faut changer la clé et renvoyer les liens.

## Utilisation

- **Accueil** : la température dehors, la moyenne de la maison et les sacs consommés depuis le début de la saison.
- **Prendre les températures** : une case par pièce. Sur iPhone, touchez une case deux fois, puis **Scanner du texte** pour lire un thermomètre avec l'appareil photo. On peut relever les températures à tout moment, même sans recharger.
- **Chargement pellets** : choisissez le nombre de sacs avec − et +, puis **Enregistrer**.
- **Voir tous les détails** : graphiques, tableaux par pièce et par tranche de froid, météo, journal et export pour Excel.
- **Réglages (⚙︎)** : votre prénom, la source de la température extérieure (automatique, manuelle ou les deux), les pièces, le prix des sacs, la commune, l'invitation d'un appareil.
- Rechargez toujours au **même niveau de réservoir** (par exemple presque vide) : la consommation se calcule entre deux chargements.
- **Sans réseau**, les saisies sont gardées dans le téléphone et envoyées au retour de la connexion.

### Ajouter un appareil (famille, tablette)

Sur un appareil déjà connecté : **Réglages**, puis **Inviter un appareil**.
- **À côté** : visez le QR code avec l'appareil photo, puis touchez le lien.
- **À distance** : **Envoyer le lien…** par SMS ou WhatsApp.

Sur iPhone et iPad, ouvrez le lien dans **Safari**, puis tout de suite **Partager**, **Sur l'écran d'accueil**, **Ajouter**. L'icône garde la connexion.

## En cas de problème

| Message | Que faire |
|---|---|
| « Clé refusée par GitHub » | La clé a expiré ou a été supprimée. Recréez-la (étape 4), puis **Réglages**, **Changer la connexion**, sur chaque téléphone. |
| « Dépôt introuvable » | Vérifiez l'identifiant, le nom du dépôt, et que la clé a bien accès à `suivi-chauffage-donnees`. |
| « La météo n'est pas joignable » | Open-Meteo ne répond pas pour le moment. Notez la température dehors à la main, ou réessayez plus tard. |
| Téléphone perdu | Sur GitHub, allez dans **Settings**, **Developer settings**, **Personal access tokens**, supprimez la clé, puis recréez-en une. |

## Vos données

Le fichier `donnees.json` du dépôt privé contient tout : réglages du foyer, pièces, remplissages et météo enregistrée. C'est un fichier texte lisible. L'onglet **History** du dépôt montre chaque modification avec son auteur et sa date.

Météo : [Open-Meteo.com](https://open-meteo.com/) (licence CC BY 4.0).

## Historique des versions

Le numéro de version est affiché en bas de chaque écran de l'application. Après avoir déposé un nouveau `index.html`, rechargez la page (Cmd + Maj + R sur Mac) et vérifiez que le numéro a changé.

| Version | Date | Changements |
|---|---|---|
| 5.41 | 13 novembre 2026 | Écran des flammes : l'application s'ouvre seule au bout de 2 secondes ; un toucher pendant ces 2 secondes fait tomber les pellets avec le bruit (environ 2,6 s), puis l'application s'ouvre. |
| 5.40 | 13 novembre 2026 | Corrige la perte des saisies quand on installe l'application sur l'écran d'accueil d'un iPhone après avoir commencé dans Safari (Apple sépare la mémoire de Safari et celle de l'icône). Dans Safari, l'adresse transporte une copie des saisies ; l'icône les reprend à sa première ouverture. |
| 5.39 | 13 novembre 2026 | Premiers pas : les étapes « Noter un chargement » sont cliquables et ouvrent directement l'écran Chargement pellets. |
| 5.38 | 13 novembre 2026 | Visite guidée : corrige l'écran qui restait figé et assombri sur ordinateur (la bulle partait hors de l'écran pendant le défilement). Position recalculée après le défilement, bulle toujours dans l'écran, bouton « Passer la visite ✕ » toujours visible en haut à droite, touche Échap. |
| 5.37 | 13 novembre 2026 | Écran de bienvenue : grand bouton « 📲 Installer sur mon écran d'accueil » en premier, au-dessus de « Commencer ». Sur Android il installe directement ; sur iPhone et Mac (Apple ne permet pas l'installation automatique) il ouvre un guide animé en 3 étapes avec le dessin des boutons à toucher. |
| 5.36 | 13 novembre 2026 | Création du foyer : exemple sous la case des pièces (« Salon, Chambre Pierre, Chambre maman »). |
| 5.35 | 13 novembre 2026 | Après l'enregistrement d'un chargement ou de températures, un écran de confirmation reste 1,8 seconde (touchez pour passer) avant de revenir à l'accueil ; les petits messages restent 4,5 secondes au lieu de 2,6. |
| 5.34 | 13 novembre 2026 | Écran de bienvenue : la phrase « Gratuit, sans compte : vos relevés restent sur cet appareil » sous « Commencer » est retirée. |
| 5.33 | 13 novembre 2026 | Nouveaux utilisateurs : visite guidée animée à la création du foyer (4 étapes, une main montre où toucher ; « Passer » possible, à revoir depuis les Réglages) ; carte « Premiers pas » avec barre de progression et félicitations (« Bravo ! Plus que 2 étapes… ») ; fête « Votre application est prête » au 2e chargement. Rien ne change pour les utilisateurs qui ont déjà 2 chargements. |
| 5.32 | 12 novembre 2026 | Écran d'ouverture : le haut-parleur 🔊 (bouton central et ligne « Montez le son ») est retiré ; il reste « Touchez l'écran pour ouvrir l'application ». Le bruit des pellets joue toujours au toucher. |
| 5.31 | 12 novembre 2026 | D'où viennent les nouveaux utilisateurs : le QR de l'application contient « ?via=qr », le lien envoyé « ?via=lien », Facebook est reconnu (?fb=1 ou fbclid). À la première ouverture, l'appareil envoie « arrivee/qr », « arrivee/lien », « arrivee/facebook » ou « arrivee/direct ». La marque est retirée de l'adresse aussitôt. |
| 5.30 | 12 novembre 2026 | Tuile « Sacs consommés » : la vraie flamme remplit toute la tuile (nouvelle vidéo `feu-tuile.mp4`, cadrée en largeur), plus ou moins vive selon le froid dehors, avec un éclat après un chargement. Sans vidéo (mode économie d'énergie, animations coupées) : l'ancien affichage violet avec la flamme dessinée. |
| 5.29 | 12 novembre 2026 | La ligne du bas de l'accueil s'intitule simplement « Obtenir cette application », et sa fenêtre ne montre que le grand QR (plus le bouton pour envoyer le lien). |
| 5.28 | 12 novembre 2026 | En bas de l'accueil, une ligne « Faire connaître l'application » avec un mini QR ; en la touchant, une petite fenêtre montre le grand QR (adresse publique uniquement, jamais la clé familiale) et un bouton pour envoyer le lien. |
| 5.27 | 12 novembre 2026 | La flamme de la tuile « Sacs consommés » utilise la même vraie vidéo de flammes que l'écran d'ouverture (taille toujours selon le froid dehors, grossit après un chargement). Si la vidéo ne peut pas se lire ou si les animations sont coupées, l'ancien dessin s'affiche. |
| 5.26 | 12 novembre 2026 | Petite fenêtre du stock : on peut la refermer en la glissant vers le bas avec le doigt, comme sur iPhone ; meilleure prise en charge de VoiceOver et du clavier (Échap ferme, le curseur reste dans la fenêtre puis revient où il était). Aucun autre changement. |
| 5.25 | 12 novembre 2026 | Stock sur l'accueil réduit à une seule ligne « 📦 Stock : 45 sacs · de quoi tenir jusqu'au … › » ; en la touchant, la petite fenêtre s'ouvre avec le détail, les derniers achats et les boutons Nouvel achat / Corriger. |
| 5.24 | 12 novembre 2026 | Stock : « Nouvel achat » et « Corriger » ouvrent une petite fenêtre qui monte du bas de l'écran (façon iPhone : Annuler / titre / Ajouter), avec raccourcis 1 palette, ½ palette, 10 sacs. La partie stock des Réglages est plus compacte. |
| 5.23 | 12 novembre 2026 | Les boutons « Suivre mon stock », « Noter un achat » et « Comparer avec l'hiver dernier » mènent directement à la bonne partie des Réglages, avec le curseur dans la case. |
| 5.22 | 12 novembre 2026 | Nouvelle image d'aperçu Facebook (`apercu-lien-2.png`) sans la mention « Gratuit · sans compte · données sur votre téléphone » ; description du lien raccourcie. |
| 5.21 | 12 novembre 2026 | Compteur : pour les appareils de la famille (mode GitHub), on peut donner un nom à l'appareil dans Réglages (ex. « papa ») ; les visites apparaissent alors dans GoatCounter sous « visite/9mv3-papa ». Les autres utilisateurs restent anonymes. |
| 5.20 | 12 novembre 2026 | Nouvelle vidéo de flammes à l'ouverture (`feu.mp4`, vidéo Pixabay n° 21531, licence de contenu Pixabay : utilisation gratuite). |
| 5.19 | 11 novembre 2026 | Stock de sacs : dans Réglages, « J'ai actuellement X sacs » et « Ajouter un achat » ; chaque chargement décompte ; l'accueil affiche le stock et jusqu'à quand il tient selon la météo, avec « Pensez à recommander » sous 10 sacs ou 2 semaines. Prochain remplissage : « Prochain remplissage prévu demain vers 8 h » d'après le dernier chargement et le froid prévu. |
| 5.18 | 11 novembre 2026 | Ouverture : le feu reste affiché tant qu'on ne touche pas l'écran (« Touchez l'écran pour ouvrir l'application ») ; le toucher fait tomber les pellets avec le son, puis l'application s'ouvre (un second toucher l'ouvre tout de suite). |
| 5.17 | 11 novembre 2026 | Ouverture : gros bouton 🔊 qui pulse au centre, « Touchez pour entendre les pellets tomber », pour que chacun sache qu'il y a du son ; 5 secondes pour toucher avant l'ouverture automatique. |
| 5.16 | 11 novembre 2026 | Comparaison avec l'hiver dernier : dans Réglages, indiquez le nombre de sacs de l'hiver dernier et les dates de chauffe ; l'accueil affiche « Vous êtes à 2 sacs de plus que l'an dernier à la même date », en répartissant les sacs de l'an dernier selon la météo réelle de chaque jour (Open-Meteo, archives). |
| 5.15 | 11 novembre 2026 | Graphiques « Au fil de la saison » et « Sacs par jour selon le froid » redessinés à la taille du téléphone : chiffres et repères lisibles. Les estimations « Par X °C dehors » ne sont plus inventées loin des températures déjà mesurées (« pas encore de mesure »). La prévision de la semaine reste toujours calculée : tant que la courbe selon le froid n'est pas fiable, elle part de votre moyenne réelle corrigée par la température prévue. |
| 5.14 | 11 novembre 2026 | L'animation du feu se joue à chaque ouverture de l'application, et aussi quand on y revient après plus de 10 minutes. |
| 5.13 | 11 novembre 2026 | Ouverture avec la vraie vidéo du poêle (fichier `feu.mp4`, à mettre sur GitHub avec les autres) et le vrai bruit des granulés enregistré au remplissage. Le sac dessiné est retiré. Sans toucher, l'application s'ouvre au bout de 3 secondes. |
| 5.12 | 11 novembre 2026 | Bruit des granulés : à l'ouverture, le sac attend au-dessus du feu ; en touchant l'écran il se vide avec le bruit des granulés (sinon il se vide tout seul, sans bruit). Le bruit joue aussi après un chargement. Réglage « Bruit des granulés » Oui/Non. Le son est une imitation faite par ordinateur. |
| 5.11 | 11 novembre 2026 | Petite animation à l'ouverture : un sac de pellets se vide dans le feu, puis l'application apparaît (3 secondes, une touche pour passer ; pas affichée si les animations sont désactivées). Les granulés qui tombent dans la flamme après un chargement s'affichent de nouveau. |
| 5.10 | 11 novembre 2026 | Le réglage « Poêle connecté » (Jolly Mec) est masqué tant qu'il n'a pas été testé. Pour l'essayer sur un appareil : ouvrir l'adresse avec `?poele=1` à la fin (et `?poele=0` pour le retirer). |
| 5.9 | 11 novembre 2026 | Compteur par appareil : chaque appareil reçoit un numéro au hasard (4 caractères, rien de personnel), visible dans Réglages. Chaque ouverture (au plus une toutes les 30 minutes) est comptée sous « visite/numéro » dans GoatCounter. |
| 5.8 | 10 novembre 2026 | Partage sur Facebook, WhatsApp… : publier seulement le lien affiche une grande image d'aperçu cliquable (fichier apercu-lien.png). |
| 5.7 | 10 novembre 2026 | Mise à jour automatique : quand on revient sur l'application, elle vérifie s'il existe une nouvelle version et se recharge toute seule (fini l'iPhone resté sur une ancienne version). |
| 5.6 | 9 novembre 2026 | La carte « La semaine à venir » est visible dès le départ, avec un message tant qu'il manque des chargements pour calculer la prévision. |
| 5.5 | 9 novembre 2026 | La flamme de l'accueil est plus grande et suit la température dehors : petite quand il fait doux, haute quand il fait froid. La palette ne montre plus que les sacs consommés (sans les places vides en pointillés). |
| 5.4 | 9 novembre 2026 | Poêle connecté Jolly Mec (lecture seule) : état, température de la pièce, puissance, fumées, alarme, via un relais Cloudflare gratuit. Ligne d'état sur l'accueil. |
| 5.3 | 9 novembre 2026 | Prévision : « La semaine à venir » affiche en grand le nombre de sacs à prévoir pour les 7 prochains jours (et la semaine suivante) ; plus de date de fin de palette. |
| 5.2 | 9 novembre 2026 | Accueil : « Les jours à venir », la consommation prévue sur 7 et 14 jours (sacs et €) d'après la météo prévue et votre consommation selon le froid, et la date où la palette en cours sera finie. |
| 5.1 | 9 novembre 2026 | Accueil : « Ma palette » se remplit d'un sac à chaque sac consommé (72 sacs par défaut, réglable dans Réglages > Pellets), avec le nombre de palettes complètes consommées. |
| 5.0 | 9 novembre 2026 | Le tas de pellets du bouton Chargement est maintenant une vraie photo de vos granulés, détourée. |
| 4.9 | 9 novembre 2026 | Le bouton Chargement montre un tas de granulés blonds dessiné. |
| 4.8 | 9 novembre 2026 | Plus de sac dessiné : le bouton Chargement reprend la bûche 🪵, et après un chargement seuls les granulés tombent dans les flammes. |
| 4.7 | 9 novembre 2026 | Accueil : seulement les flammes (plus de poêle dessiné), inspirées de la vidéo : cœur blanc-jaune, bords orange, langues qui dansent, braises et petites étincelles. |
| 4.6 | 9 novembre 2026 | Le sac est redessiné d'après le vrai sac : plastique transparent, granulés blonds, impression vert d'eau, étiquette PREMIUM. |
| 4.5 | 9 novembre 2026 | Le poêle de l'accueil est redessiné d'après le vrai poêle : corps noir, haute vitre verticale, fond strié, grosse flamme claire et lueur sur le mur. |
| 4.4 | 9 novembre 2026 | Poêle et sac plus réalistes : acier ombré, porte en fonte, vitre avec reflet, briques réfractaires, creuset et braises, écran de commande ; sac plastique soudé avec poignée, bande imprimée et granulés visibles. |
| 4.3 | 9 novembre 2026 | Animations : un poêle à pellets dessiné (flammes, braises, fumée, voyant) remplace la flamme de l'accueil ; un sac de pellets sur le bouton Chargement ; après un chargement, le sac se vide dans le poêle et les flammes grandissent. |
| 4.2 | 9 novembre 2026 | Règles Apple (HIG) : marges de l'encoche, boutons d'au moins 44 points, plus de zoom en tapant. Nouveau réglage « Style » : Ludique ou Sobre (iOS), police et couleurs d'Apple, clair et sombre. |
| 4.1 | 9 novembre 2026 | Correctif iPhone : le code de connexion passe avant le « # » de l'adresse (?connexion=…), seule partie que l'iPhone garde pour l'icône de l'écran d'accueil. Les anciens liens restent valables. |
| 4.0 | 9 novembre 2026 | Correctif iPhone : dans Safari, l'adresse garde le code de connexion sur tous les écrans. Une icône ajoutée à l'écran d'accueil depuis n'importe quelle page reste connectée à vos relevés. |
| 3.9 | 9 novembre 2026 | Corrections après relecture du code : nouvel essai d'envoi toutes les minutes en cas d'échec ; refus d'un chargement daté dans le futur ; alerte si la commune trouvée ne correspond pas au code postal ; export CSV protégé (point-virgule, guillemets, formules) ; message correct quand seule la température dehors est notée ; « Ajouter un foyer » masqué (remplacé par « Faire connaître ») ; éclairs d'orage plus doux. |
| 3.8 | 9 novembre 2026 | Écran de départ épuré : seul « Commencer » est visible ; les connexions GitHub sont rangées sous « Options avancées ». |
| 3.7 | 9 novembre 2026 | Compteur d'utilisateurs activé : tableau de bord sur https://suivi-pellets.goatcounter.com |
| 3.6 | 9 novembre 2026 | Réglages : « Faire connaître l’application », avec QR code et lien sans aucune donnée, pour les autres foyers. |
| 3.5 | 9 novembre 2026 | Correctif iPhone : l'icône ajoutée à l'écran d'accueil après une invitation garde de nouveau la connexion (elle s'ouvrait sur l'écran de départ depuis la 3.2). |
| 3.4 | 9 novembre 2026 | Les animations des fêtes s'affichent 15 jours avant et 15 jours après chaque fête. Entre Noël et le Nouvel An, la fête la plus proche l'emporte. |
| 3.3 | 9 novembre 2026 | L'animation démarre toujours au départ, même sur un appareil réglé sur « Réduire les animations ». Chacun peut la couper dans les Réglages. |
| 3.2 | 9 novembre 2026 | Application installable sur le téléphone (icône, fonctionne hors ligne). Accueil simplifié : un gros bouton « Commencer » sans compte. Compteur anonyme d'utilisateurs (GoatCounter), désactivable. |
| 3.1 | 9 novembre 2026 | Mode sans compte : « Commencer sur cet appareil ». Relevés gardés sur l'appareil, avec sauvegarde et restauration par fichier, et rappel de sauvegarde. |
| 3.0 | 9 novembre 2026 | Ajout d'un foyer en un clic : un seul dépôt et une seule clé pour tous les autres foyers, un fichier par foyer. |
| 2.9 | 9 novembre 2026 | Réglage des animations simplifié : Oui / Non. L'intensité est fixée par nous pour tout le monde. |
| 2.8 | 9 novembre 2026 | Écran de veille fixé à 15 secondes pour tout le monde (plus de réglage). Il s'arrête si l'animation est sur « Arrêt ». |
| 2.7 | 9 novembre 2026 | Écran de veille : sur l'accueil, l'animation passe devant l'écran après un moment sans toucher (15 s à 3 min, ou jamais) et repasse derrière au premier toucher. |
| 2.6 | 9 novembre 2026 | Halloween : toiles d'araignée dans les coins et araignées qui descendent au bout de leur fil. |
| 2.5 | 9 novembre 2026 | Réglages : « Préparer l’accès d’un autre foyer » crée le lien et le QR code d’un proche, sans déconnecter votre appareil. |
| 2.4 | 9 novembre 2026 | Correctif : le prénom s'enregistre pendant la saisie (bouton OK) et n'est plus effacé par une mise à jour en arrière-plan ; les autres cases ne sont plus effacées non plus. |
| 2.3 | 9 novembre 2026 | Animations des fêtes automatiques : Noël, Nouvel An (feux d'artifice), Chandeleur, Saint-Valentin, Pâques, Halloween. Désactivables dans les Réglages. |
| 2.2 | 9 novembre 2026 | Animations : chiffres qui défilent à l'ouverture, étincelles à chaque chargement, flamme qui grossit quand on consomme plus que d'habitude, ciel du moment (soleil, pluie, neige, orage, vent). |
| 2.1 | 9 novembre 2026 | Animation de l'accueil plus visible ; réglage par appareil : Arrêt, Douce, Normale ou Vive. |
| 2.0 | 9 novembre 2026 | Nouvel accueil (dehors, maison, sacs) avec fond animé ; écrans séparés « Prendre les températures » et « Chargement pellets » ; écran Détails ; choix de la source de la température extérieure ; emplacements prévus pour thermomètres et poêles connectés (Jolly Mec / Agua IOT). Conversion automatique des données 1.x. |
| 1.3 | 9 novembre 2026 | Cases des pièces compatibles avec « Scanner du texte » de l'iPhone pour lire un thermomètre avec l'appareil photo. |
| 1.2 | 9 novembre 2026 | L'icône ajoutée à l'écran d'accueil (iPhone, iPad) garde la connexion. Numéro de version affiché. |
| 1.1 | 9 novembre 2026 | Invitation d'un appareil par lien ou QR code. |
| 1.0 | 9 novembre 2026 | Première version : remplissages, températures par pièce, météo automatique, données dans un dépôt GitHub privé. |
