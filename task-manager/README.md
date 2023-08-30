#Cours Angular Éléctif
node : v18.15.0
npm : 9.7.1
Angular CLI : 16.2.0
Yarn : 1.22.19
Compodoc 1.1.21

##Démarrage de l application :

**url de l'api :**
Pour démarrer Anglar en mode devlopement :

```js
ng serve --open //demmare l'application est ouvre le navigateur
//ou
npm start //demmare l'application
//
ng serve //demmare l'application
```

**ng build** : pour build l'application en minifiant les fichiers c'est à dire en supprimant les espaces, les commentaires, etc...pour optimiser le code -> voir dans le index.html et le main dans le dossier dist que le ng build a créé.
c'est ce que l'on utilise pour mettre l'application en production

Pour configurer compodoc :

. Créer un fichier tsconfig.doc.json et coller :

```js
  {
  "include": ["src/**/*.ts"],
  "exclude": ["src/test.ts", "src/**/*.spec.ts", "src/app/file-to-exclude.ts"]
  }
```

Dans le package.json, ajouter un script :

```js
"scripts": {
  "compodoc": "npx compodoc -p tsconfig.doc.json"
}
```

##Composants :
Pour créer un component :

```js
ng g c nom-du-composant
//ou
ng generate component nom-du-composant :
```

Le model de type classe :

```js
ng g class models/nom-du-model
//ou
ng generate class models/nom-du-model : pour créer un model
```

Le model de type classe :

```js
ng g interface models/nom-du-model
//ou
ng generate i models/nom-du-model : pour créer un model de type interface
```

###Démarage de l'api Json serveur pour simuler une api :

```javascript
  json-server src/server/db.json
```

**execution du server sur le port 3000 :**

```javascript
  http://localhost:3000/taskList
```

les methode de l'api sont basique

- **GET**
- **POST**
- **PUT**
- **PATCH**
- **DELETE**

grace a json serveur il est facile de moquer une API par manque de temp je n ai pas pus implementer les param sur l'api comme pour le status qui normalement devrais etre implementée coté Back-end .

#### Voila un petit tuto d'installation rapide :

**Étape 1 : Prérequis**

Assurez-vous d'avoir Node.js installé sur votre système. JSON Server est un package Node.js, donc vous aurez besoin de Node.js pour l'exécuter. Vous pouvez le télécharger et l'installer à partir du site officiel de Node.js : https://nodejs.org/

**Étape 2 : Installation de JSON Server**

Une fois que Node.js est installé, ouvrez votre terminal (ou invite de commandes sur Windows) et exécutez la commande suivante pour installer JSON Server globalement sur votre système :

```bash
npm install -g json-server
```

L'option -g signifie que vous l'installez globalement, ce qui vous permettra d'accéder à la commande json-server de n'importe où sur votre système.

**Étape 3 : Création d'un fichier JSON**

Vous devez maintenant créer un fichier JSON qui servira de base de données pour JSON Server. Par exemple, vous pouvez créer un fichier nommé db.json et y ajouter des données JSON.

```json
{
  "taskList": [
    {
      "title": "aa",
      "description": "bb",
      "status": "TERMINEE",
      "creationDate": "2023-08-30T20:45:31.199Z",
      "id": 2
    }
  ]
}
```

**Étape 4 : Démarrage du serveur**

Dans le terminal, accédez au répertoire où vous avez créé le fichier db.json, puis exécutez la commande suivante pour démarrer JSON Server en utilisant ce fichier comme base de données :

```bash
json-server src/server/db.json
```

JSON Server utilisera par défaut le port 3000. Vous pouvez spécifier un autre port avec l'option --port si nécessaire.

documentation officielle de JSON Server: https://github.com/typicode/json-server
