# portfolio-private
PRIVATE REPO | lucrousseau21/portfolio

# Travailler avec un dépôt privé et publier vers un dépôt public sur GitHub - Copilot

Ce guide explique comment travailler en toute confidentialité sur un dépôt privé, puis envoyer tes mises à jour vers un dépôt public. Cela te permet de préparer tes changements hors de la vue du public, puis de les publier quand tu le souhaites.

---

## 1. Créer les deux dépôts

- **Dépôt privé** : sur GitHub, crée un dépôt privé (ex: `portfolio-private`).
- **Dépôt public** : crée aussi le dépôt public (ex: `portfolio-public`).

---

## 2. Cloner le dépôt privé

```bash
git clone https://github.com/lucrousseau21/portfolio-private.git
cd portfolio-private
```

---

## 3. Ajouter le dépôt public comme remote

```bash
git remote add public https://github.com/lucrousseau21/portfolio-public.git
```

> Remplace `lucrousseau21` par ton nom d’utilisateur GitHub.

---

## 4. Travailler sur le dépôt privé

- Crée des branches, fais tes commits, merges, etc.
- Exemple :
  ```bash
  git checkout -b nouvelle-fonctionnalite
  # ... travaille et commit ...
  git checkout main
  git merge nouvelle-fonctionnalite
  ```

---

## 5. Mettre à jour ton dépôt privé avec les changements du dépôt public

Si tu veux récupérer les dernières modifications du dépôt public dans ton dépôt privé :

```bash
git fetch public
git checkout main
git merge public/main
```

> Tu peux aussi utiliser la commande :
>
> ```bash
> git pull public main
> ```

---

## 6. Publier tes changements du privé vers le public

Quand tu es prêt à partager tes modifications :

- Pour publier la branche principale (`main`) :
  ```bash
  git push public main
  ```
- Pour publier une branche spécifique (ex: pour une Pull Request) :
  ```bash
  git push public nouvelle-fonctionnalite
  ```

Puis, sur GitHub, crée une Pull Request depuis la branche publiée.

---

## Remarques

- **Confidentialité** : Tant que tu ne pousses rien vers le dépôt public, tes changements restent privés.
- **Synchronisation** : Tu peux régulièrement synchroniser ton dépôt privé avec les mises à jour du dépôt public (voir étape 5).
- **Organisation** : Cette méthode te permet de préparer et tester tes développements en toute tranquillité avant publication.

---

## Résumé des commandes principales

```bash
# Cloner le dépôt privé
git clone https://github.com/lucrousseau21/portfolio-private.git

# Ajouter le dépôt public comme remote
git remote add public https://github.com/lucrousseau21/portfolio-public.git

# Mettre à jour le privé avec le public
git fetch public
git merge public/main

# Publier du privé vers le public
git push public main
```

---
