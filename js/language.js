var langs =
[ ['English',          
                       ['en-US', 'United States'], 
                       ['en-IN', 'India'],
                       ['en-AU', 'Australia'],
                       ['en-CA', 'Canada'],
                       ['en-NZ', 'New Zealand'],
                       ['en-GB', 'United Kingdom']],
                             

  ['Hindi',            ['hi-IN', 'India']],
];

let select_language = document.querySelector('#select_language');
let select_dialect = document.querySelector('#select_dialect');

for (var i = 0; i < langs.length; i++) {
  select_language.options[i] = new Option(langs[i][0], i);
}

select_language.selectedIndex = 0; // select primary language
updateCountry();
select_dialect.selectedIndex = 1; // select primary dialect

function updateCountry() {
  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
    select_dialect.remove(i);
  }
  var list = langs[select_language.selectedIndex];
  for (var i = 1; i < list.length; i++) {
    select_dialect.options.add(new Option(list[i][1], list[i][0]));
  }
  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}