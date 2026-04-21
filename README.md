# unlv-prospective-ai

Simple static site for publishing with GitHub Pages.

## Local Files

- `index.html`: main page
- `styles.css`: page styles
- `script.js`: small client-side enhancement

## Publish With GitHub Pages

GitHub's current docs recommend the simplest option for a plain static site: publish from a branch and use either the repository root or a `/docs` folder as the source.

For this repo, the easiest setup is:

1. Push the contents of `main` to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
5. Choose branch `main` and folder `/(root)`.
6. Save and wait for the deployment to finish.

Because this is a project site, the expected URL will be:

`https://nima-faraji.github.io/unlv-prospective-ai/`

## Notes

- Keep asset references relative, like `./styles.css`, so they work on the project-site URL path.
- If you later want a build step, GitHub Pages also supports publishing with GitHub Actions.
