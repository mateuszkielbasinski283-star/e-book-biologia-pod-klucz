# Biologia pod klucz — matura 2027

Polska strona sprzedażowa jednego e-booka. Strona jest statyczna i nie wymaga instalacji zależności ani kompilacji.

## Podgląd lokalny

W katalogu repozytorium uruchom:

```sh
python3 -m http.server 3000 --bind 127.0.0.1 --directory public
```

Otwórz `http://127.0.0.1:3000`. Zatrzymaj serwer klawiszami Ctrl+C.

## Sprzedaż i publikacja

1. Utwórz produkt cyfrowy w Naffy, Easycart lub innej platformie. Wgraj pełny PDF wyłącznie do tej platformy i ustaw automatyczne dostarczanie po udanej płatności. Zweryfikuj dostawę w trybie testowym dostawcy.
2. W [public/oferta.js](public/oferta.js) uzupełnij potwierdzoną cenę PLN, opis dostawy, dane sprzedawcy, e-mail oraz adresy dokumentów dla klientów. Sprawdź zgodność ceny i warunków z koszykiem.
3. W polu `koszyk` wklej pełny adres HTTPS do właściwego koszyka. Do czasu uzupełnienia tego pola witryna pokazuje komunikat wersji demonstracyjnej.
4. W Netlify zaimportuj repozytorium. Ustawienia są zapisane w `netlify.toml`. Alternatywnie wgraj sam katalog `public` na hosting statyczny.

Katalog `public` zawiera tylko okładkę oraz obrazy stron demonstracyjnych 3, 6, 12 i 25. Kompletnego PDF-u nie dodawaj do repozytorium ani hostingu.
