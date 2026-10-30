# Personal Website

A personal website built with Hugo and hosted on GitHub Pages, showcasing research, software projects,
and professional experience in geotechnical engineering, numerical modelling and AI.

Visit the website at: [https://brunozc.github.io](https://brunozc.github.io).

# Updating the content

Most of the content lives in data files, so the pages update without touching the templates:

| What                          | Where                                                                 |
|-------------------------------|-----------------------------------------------------------------------|
| Home page intro               | `content/_index.md`                                                   |
| About, Research, Software, Contact text | `content/pages/*.md`                                        |
| Publications                  | `data/references.json` (CSL-JSON, e.g. exported from Zotero)          |
| Research themes               | `data/research.yaml`                                                  |
| Software projects             | `data/software.yaml`                                                  |
| Name, role, profile links     | `config.toml` (`[params]`)                                            |
| Figures and videos            | `static/media/` (`home/`, `research/`, `software/`)                   |

Publications are grouped by type and year automatically: adding an entry to `data/references.json` is enough.
Supported types are `article-journal`, `paper-conference`, `book-chapter`, `thesis` and `MSc-thesis`.

## Figures and videos

Media entries in `data/research.yaml` and `data/software.yaml` point to files in `static/media/research/` and
`static/media/software/`; the portrait (`config.toml`) is in `static/media/home/`.
When a file does not exist yet, `hugo server` shows a dashed placeholder with the expected path and a
suggestion of what to show; the production build hides it. To fill a placeholder, save the file at that path.

Use MP4 instead of GIF for animations (it is about ten times smaller). A video uses `<name>.jpg` next to it
as poster image. To convert a GIF:

```bash
ffmpeg -i input.gif -movflags +faststart -pix_fmt yuv420p -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" -c:v libx264 -crf 26 output.mp4
ffmpeg -i input.gif -frames:v 1 output.jpg
```

## Local preview

```bash
hugo server
```

# License

This project is open source.

This repository contains both code and content.

- Code (templates, styles, scripts, configuration) is licensed under the GNU GENERAL PUBLIC LICENSE Version 3
  (see [LICENSE-GPL-3.0](LICENSE-GPL-3.0)).

- Content (text, images, videos) is licensed under the Creative Commons
  Attribution 4.0 International License (see [LICENSE-CC-BY](LICENSE-CC-BY)).
