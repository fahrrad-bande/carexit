---
link_title: Teste
anchor_id: test
title: Ce-ți lipsește dacă nu ești cu mașina?
subtitle: Descoperă cât ești de limitat înainte de carEXIT.
order: 3
language: ro
section_class: yellow
section_layout: section_umfrage
permalink: /
---
{% include frage.html
    title="Șofatul îmi dă următoarele senzații..."
    option1="Furnicături în stomac"
    option2="Un sentiment de normalitate"
    option3="O stare aiurea"
    next="mai departe"
%}

{% include frage.html
    title="Pe o scară de la 1 la 10, șofatul îmi dă o stare de stres de..."
    option1="1 a 3"
    option2="4 a 7"
    option3="8 a 10"
    next="mai departe"
    previous="înapoi"
%}

{% include frage.html
    title="Când mă gândesc la pedalat..."
    option1="Mă gândesc la prietenii mei (bi)cicliști, antrenați, atletici și cu bună dispoziție"
    option2="Sinele meu cel slab zice bună"
    option3="Mă sperii"
    next="mai departe"
    previous="înapoi"
%}

{% include frage.html
    title="Eu unul......"
    option1="Nu m-am gândit niciodată să-mi schimb mașina cu bicicleta."
    option2="La volan fiind, m-am gândit de multe ori ce bine era să fi fost cu bicla."
    option3="Am vise cu mine pedalând la apus."
    next="mai departe"
    previous="înapoi"
%}

{% include antwort.html
  title1="Convinsul"
  text1="Alegerea ta este mașina deoarece îți este la-ndemână. Pentru tine, avantajele unei mașini personale sunt la polul opus față de alegerea pedalatului deoarece te întrebi rar dacă să ieși cu bicla. Ne-ar face plăcere să te sprijinim cu primii pași – începe prin a înlocui bicicleta cu mașina."
  title2="Scepticii"
  text2="recunoști în mod clar avantajele biciclitului, dar ești conștient și de consecințele unei schimbări. Te asigurăm că: Folosind bicicleta te poți deplasa în proporție de 100% prin oraș. Citește în continuare despre cum se face schimbarea."
  title3="Nesigurii"
  text3="crezi în bicicletă ca mijloc de transport, dar ți-e frică de lipsa de protecție de pe șosea. Te afli în punctul în care nu te poți schimba de la o zi la alta și trebuie să-ți găsești timpul și persoana potrivită pentru a depăși această stare. Suntem siguri că bucuria pedalatului este mai puternică decât frica. "
%}
