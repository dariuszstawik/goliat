import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { unstable_setRequestLocale } from "next-intl/server";

export const runtime = "edge";

export default async function PolitykaPrywatnosci({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className="pt-48">
      <section className="max-w-4xl mx-auto px-8 mb-16">
        {/* <h1>Polityka prywatności</h1> */}
        <article>
          <h1 className="text-center">Polityka prywatności</h1>
          <div className="text-base leading-relaxed my-8">
            <p>
              Polityka prywatności opisuje zasady przetwarzania przez nas
              informacji na Twój temat, w tym danych osobowych oraz ciasteczek,
              czyli tzw. cookies.
            </p>
            <ol>
              <li className="my-2">
                Informacje ogólne
                <ol>
                  <li>
                    Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
                    adresem url: goliat.pl
                  </li>
                  <li>
                    Operatorem serwisu oraz Administratorem danych osobowych
                    jest: Goliat Sp. z o.o. ul. Topolowa 75 63-400 Ostrów Wlkp.
                  </li>
                  <li>
                    Adres kontaktowy poczty elektronicznej operatora:
                    goliat@goliat.pl
                  </li>
                  <li>
                    Operator jest Administratorem Twoich danych osobowych w
                    odniesieniu do danych podanych dobrowolnie w Serwisie.
                  </li>
                  <li>
                    Serwis wykorzystuje dane osobowe w następujących celach:
                    Obsługa zapytań przez formularz
                  </li>

                  <li>
                    Serwis realizuje funkcje pozyskiwania informacji o
                    użytkownikach i ich zachowaniu w następujący sposób:
                    <ul>
                      <li>
                        Poprzez dobrowolnie wprowadzone w formularzach dane,
                        które zostają wprowadzone do systemów Operatora.
                      </li>

                      <li>
                        {" "}
                        Poprzez zapisywanie w urządzeniach końcowych plików
                        cookie (tzw. „ciasteczka”).
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>

              <li className="my-2">
                Wybrane metody ochrony danych stosowane przez Operatora Miejsca
                logowania i wprowadzania danych osobowych są chronione w
                warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
                dane logowania, wprowadzone na stronie, zostają zaszyfrowane w
                komputerze użytkownika i mogą być odczytane jedynie na docelowym
                serwerze. Operator okresowo zmienia swoje hasła administracyjne.
              </li>
              <li className="my-2">
                Hosting Serwis jest hostowany (technicznie utrzymywany) na
                serwerach operatora: Cloudflare Pages w celu zapewnienia
                niezawodności technicznej prowadzi logi na poziomie serwera.
                Zapisowi mogą podlegać:
                <ul>
                  <li>
                    zasoby określone identyfikatorem URL (adresy żądanych
                    zasobów – stron, plików),
                  </li>
                  <li>czas nadejścia zapytania,</li>
                  <li> czas wysłania odpowiedzi,</li>
                  <li>
                    nazwę stacji klienta – identyfikacja realizowana przez
                    protokół HTTP,
                  </li>
                  <li>
                    informacje o błędach jakie nastąpiły przy realizacji
                    transakcji HTTP,
                  </li>
                  <li>
                    adres URL strony poprzednio odwiedzanej przez użytkownika
                    (referer link) – w przypadku gdy przejście do Serwisu
                    nastąpiło przez odnośnik,
                  </li>
                  <li>informacje o przeglądarce użytkownika,</li>
                  <li>informacje o adresie IP,</li>
                  <li>
                    informacje diagnostyczne związane z procesem samodzielnego
                    zamawiania usług poprzez rejestratory na stronie,
                  </li>
                  <li>
                    informacje związane z obsługą poczty elektronicznej
                    kierowanej do Operatora oraz wysyłanej przez Operatora.{" "}
                  </li>
                </ul>
              </li>
              <li className="my-2">
                Twoje prawa i dodatkowe informacje o sposobie wykorzystania
                danych
                <ol>
                  <li>
                    W niektórych sytuacjach Administrator ma prawo przekazywać
                    Twoje dane osobowe innym odbiorcom, jeśli będzie to
                    niezbędne do wykonania zawartej z Tobą umowy lub do
                    zrealizowania obowiązków ciążących na Administratorze.
                    Dotyczy to takich grup odbiorców:
                    <ul>
                      <li>firma hostingowa na zasadzie powierzenia</li>
                      <li>operatorzy pocztowi</li>
                      <li>
                        upoważnieni pracownicy i współpracownicy, którzy
                        korzystają z danych w celu realizacji celu działania
                        strony
                      </li>
                    </ul>
                  </li>
                  <li>
                    Twoje dane osobowe przetwarzane przez Administratora nie
                    dłużej, niż jest to konieczne do wykonania związanych z nimi
                    czynności określonych osobnymi przepisami (np. o prowadzeniu
                    rachunkowości). W odniesieniu do danych marketingowych dane
                    nie będą przetwarzane dłużej niż przez 3 lata.
                  </li>
                  <li>
                    Przysługuje Ci prawo żądania od Administratora:
                    <ul>
                      <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                      <li>ich sprostowania,</li>
                      <li>usunięcia,</li>
                      <li> ograniczenia przetwarzania,</li>
                      <li>oraz przenoszenia danych.</li>
                    </ul>
                  </li>
                  <li>
                    Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
                    przetwarzania wskazanego w pkt 3.2 wobec przetwarzania
                    danych osobowych w celu wykonania prawnie uzasadnionych
                    interesów realizowanych przez Administratora, w tym
                    profilowania, przy czym prawo sprzeciwu nie będzie mogło być
                    wykonane w przypadku istnienia ważnych prawnie uzasadnionych
                    podstaw do przetwarzania, nadrzędnych wobec Ciebie
                    interesów, praw i wolności, w szczególności ustalenia,
                    dochodzenia lub obrony roszczeń.
                  </li>
                  <li>
                    Na działania Administratora przysługuje skarga do Prezesa
                    Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193
                    Warszawa.
                  </li>
                  <li>
                    Podanie danych osobowych jest dobrowolne, lecz niezbędne do
                    obsługi Serwisu.
                  </li>
                  <li>
                    W stosunku do Ciebie mogą być podejmowane czynności
                    polegające na zautomatyzowanym podejmowaniu decyzji, w tym
                    profilowaniu w celu świadczenia usług w ramach zawartej
                    umowy oraz w celu prowadzenia przez Administratora
                    marketingu bezpośredniego.
                  </li>
                  <li>
                    Dane osobowe są przekazywane od krajów trzecich w rozumieniu
                    przepisów o ochronie danych osobowych. Oznacza to, że
                    przesyłamy je poza teren Unii Europejskiej.{" "}
                  </li>
                </ol>{" "}
              </li>
              <li className="my-2">
                Informacje w formularzach
                <ol>
                  <li>
                    Serwis zbiera informacje podane dobrowolnie przez
                    użytkownika, w tym dane osobowe, o ile zostaną one podane.
                  </li>
                  <li>
                    Serwis może zapisać informacje o parametrach połączenia
                    (oznaczenie czasu, adres IP).
                  </li>
                  <li>
                    Serwis, w niektórych wypadkach, może zapisać informację
                    ułatwiającą powiązanie danych w formularzu z adresem e-mail
                    użytkownika wypełniającego formularz. W takim wypadku adres
                    e-mail użytkownika pojawia się wewnątrz adresu url strony
                    zawierającej formularz.
                  </li>
                  <li>
                    Dane podane w formularzu są przetwarzane w celu wynikającym
                    z funkcji konkretnego formularza, np. w celu dokonania
                    procesu obsługi zgłoszenia serwisowego lub kontaktu
                    handlowego, rejestracji usług itp. Każdorazowo kontekst i
                    opis formularza w czytelny sposób informuje, do czego on
                    służy.{" "}
                  </li>
                </ol>
              </li>
              <li className="my-2">
                Logi Administratora{" "}
                <p>
                  Informacje zachowaniu użytkowników w serwisie mogą podlegać
                  logowaniu. Dane te są wykorzystywane w celu administrowania
                  serwisem.{" "}
                </p>
              </li>
              <li className="my-2">
                Istotne techniki marketingowe
                <p>
                  Operator stosuje analizę statystyczną ruchu na stronie,
                  poprzez Google Analytics (Google Inc. z siedzibą w USA).
                  Operator nie przekazuje do operatora tej usługi danych
                  osobowych, a jedynie zanonimizowane informacje. Usługa bazuje
                  na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
                  W zakresie informacji o preferencjach użytkownika gromadzonych
                  przez sieć reklamową Google użytkownik może przeglądać i
                  edytować informacje wynikające z plików cookies przy pomocy
                  narzędzia: https://www.google.com/ads/preferences/{" "}
                </p>
              </li>

              <li className="my-2">
                Informacja o plikach cookies
                <ol>
                  <li>Serwis korzysta z plików cookies.</li>
                  <li>
                    Pliki cookies (tzw. „ciasteczka”) stanowią dane
                    informatyczne, w szczególności pliki tekstowe, które
                    przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
                    przeznaczone są do korzystania ze stron internetowych
                    Serwisu. Cookies zazwyczaj zawierają nazwę strony
                    internetowej, z której pochodzą, czas przechowywania ich na
                    urządzeniu końcowym oraz unikalny numer.
                  </li>
                  <li>
                    Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
                    Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
                    operator Serwisu.
                  </li>
                  <li>
                    Pliki cookies wykorzystywane są w następujących celach:
                    <ul>
                      <li>
                        utrzymanie sesji użytkownika Serwisu (po zalogowaniu),
                        dzięki której użytkownik nie musi na każdej podstronie
                        Serwisu ponownie wpisywać loginu i hasła;
                      </li>
                      <li>
                        realizacji celów określonych powyżej w części "Istotne
                        techniki marketingowe";
                      </li>
                    </ul>
                  </li>
                  <li>
                    W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
                    cookies: „sesyjne” (session cookies) oraz „stałe”
                    (persistent cookies). Cookies „sesyjne” są plikami
                    tymczasowymi, które przechowywane są w urządzeniu końcowym
                    Użytkownika do czasu wylogowania, opuszczenia strony
                    internetowej lub wyłączenia oprogramowania (przeglądarki
                    internetowej). „Stałe” pliki cookies przechowywane są w
                    urządzeniu końcowym Użytkownika przez czas określony w
                    parametrach plików cookies lub do czasu ich usunięcia przez
                    Użytkownika.
                  </li>
                  <li>
                    Oprogramowanie do przeglądania stron internetowych
                    (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
                    przechowywanie plików cookies w urządzeniu końcowym
                    Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany
                    ustawień w tym zakresie. Przeglądarka internetowa umożliwia
                    usunięcie plików cookies. Możliwe jest także automatyczne
                    blokowanie plików cookies Szczegółowe informacje na ten
                    temat zawiera pomoc lub dokumentacja przeglądarki
                    internetowej.
                  </li>
                  <li>
                    Ograniczenia stosowania plików cookies mogą wpłynąć na
                    niektóre funkcjonalności dostępne na stronach internetowych
                    Serwisu.
                  </li>
                  <li>
                    Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika
                    Serwisu wykorzystywane mogą być również przez współpracujące
                    z operatorem Serwisu podmioty, w szczególności dotyczy to
                    firm: Google (Google Inc. z siedzibą w USA), Facebook
                    (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z
                    siedzibą w USA).{" "}
                  </li>
                </ol>
              </li>
              <li className="my-2">
                Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać
                zgodę?
                <ol>
                  <li>
                    Jeśli użytkownik nie chce otrzymywać plików cookies, może
                    zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie
                    obsługi plików cookies niezbędnych dla procesów
                    uwierzytelniania, bezpieczeństwa, utrzymania preferencji
                    użytkownika może utrudnić, a w skrajnych przypadkach może
                    uniemożliwić korzystanie ze stron www
                  </li>
                  <li>
                    W celu zarządzania ustawienia cookies wybierz z listy
                    poniżej przeglądarkę internetową, której używasz i postępuj
                    zgodnie z instrukcjami:
                    <ul>
                      <li>Edge</li>
                      <li>Internet Explorer</li>
                      <li>Chrome</li>
                      <li>Safari</li>
                      <li>Firefox</li>
                      <li>Opera</li>
                    </ul>
                    Urządzenia mobilne:
                    <ul>
                      <li>Android</li>
                      <li>Safari (iOS)</li>
                      <li> Windows Phone.</li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </article>
      </section>
    </div>
  );
}
