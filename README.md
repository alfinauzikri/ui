# Admin Templates & UI Kits — by [@alfinauzikri](https://github.com/alfinauzikri)

This repository is a curated showcase of beautiful admin dashboard templates & UI kits.  
Each kit contains its metadata (in JSON) and a representative image screenshot.

The UI showcase is powered by [shadcn/ui](https://github.com/shadcn-ui/ui) — special thanks for the incredible open-source work!

## 📁 Project Structure

```
├── data/
│   ├── adminlte.json
│   ├── chakra.json
│   ├── horizon.json
│   ├── shadcn.json
│   ├── tabler.json
│   └── volt.json
├── public/
│   └── assets/images/
│       ├── adminlte.png
│       ├── chakra.png
│       ├── horizon.png
│       ├── shadcn.png
│       ├── tabler.png
│       └── volt.png
```

## 🤝 Contributing

Want to add your favorite UI kit? Here's how:

1. **Fork this repository**
2. **Add your UI kit JSON file** to the `data/` directory  
   Example:
   ```json
   {
       "title": "Shadcn UI",
       "description": "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
       "tags": [
         "React",
         "Components",
         "Tailwind CSS"
       ],
       "stargazers_count": 90128,
       "thumbnail": "shadcn.png",
       "frameworks": [
         {
           "name": "React",
           "demo": "https://ui.shadcn.com",
           "repo": "shadcn-ui/ui"
         }
       ]
   }
   ```
3. **Add a screenshot PNG** of the UI kit to `public/assets/images/`  
   Make sure the filename matches the JSON filename (e.g. `shadcn.png`)

4. **Create a Pull Request**
   - Use a descriptive title
   - Mention if it's a new kit or an update
   - Include any relevant notes

## 🌟 Special Thanks

This project is built using [shadcn/ui](https://github.com/shadcn-ui/ui).  
Massive thanks to the maintainers and contributors of that repo! 🙌

---

Made with 💛 by [@alfinauzikri](https://github.com/alfinauzikri)