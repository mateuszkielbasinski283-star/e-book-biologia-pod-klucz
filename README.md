# Biologia pod klucz — matura 2027

Polska strona sprzedażowa jednego e-booka. Strona jest statyczna i nie wymaga instalacji zależności ani kompilacji.

## Podgląd lokalny

W katalogu repozytorium uruchom:

```sh
python3 -m http.server 3000 --bind 127.0.0.1 --directory public
```

Otwórz `http://127.0.0.1:3000`. Zatrzymaj serwer klawiszami Ctrl+C.

## Sprzedaż i publikacja

- Adres Naffy dla wszystkich przycisków zakupu jest w polu `koszyk` w [public/oferta.js](public/oferta.js).
- Cenę wyświetlaną na stronie zmienisz w sekcji oferty w [public/index.html](public/index.html). Utrzymuj jej zgodność z ceną w Naffy.
- Pełny PDF i jego dostawę po zakupie obsługuje Naffy. Dane sprzedawcy i adresy dokumentów dla klientów możesz uzupełnić w `public/oferta.js`.
- Netlify wdraża gałąź `main` po połączeniu z repozytorium. Ustawienia katalogu publikacji są w `netlify.toml`.

Katalog `public` zawiera tylko okładkę oraz obrazy stron demonstracyjnych 3, 6, 12 i 25. Kompletnego PDF-u nie dodawaj do repozytorium ani hostingu.
