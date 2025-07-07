"use strict";

function jourtravaille(date) {
  const holidays_2020 = [
    new Date(2020, 0, 1),
    new Date(2020, 3, 13),
    new Date(2020, 4, 1),
    new Date(2020, 4, 8),
    new Date(2020, 4, 21),
    new Date(2020, 5, 1),
    new Date(2020, 6, 14),
    new Date(2020, 7, 15),
    new Date(2020, 10, 1),
    new Date(2020, 10, 11),
    new Date(2020, 11, 25),
  ];

  let weekday = date.getDay();
  let day = date.getDate();
  let month = date.getMonth();
  let str_month = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();

  for (let i = 0; i < holidays_2020.length; i++) {
    let cur_day = holidays_2020[i].getDate();
    let cur_month = holidays_2020[i].getMonth();
    if (cur_day === day && cur_month === month) {
      console.log(`Le ${day} ${str_month} ${year} est un jour férié`);
      return;
    }
  }

  if (weekday === 0 || weekday === 6) {
    console.log(`Non, ${day} ${str_month} ${year} est un week-end`);
  } else {
    console.log(`Oui, ${day} ${str_month} ${year} est un jour travaillé`);
  }
}

jourtravaille(new Date("August 19, 1975 23:15:30")); // travail
jourtravaille(new Date("December 25, 2020 23:15:30")); // ferie
jourtravaille(new Date("June 25, 2022 23:15:30")); // w-e
jourtravaille(new Date("2021-04-04T07:08:25.866Z")); // w-e
jourtravaille(new Date("2017-03-02T18:09:01.104Z")); // travail
jourtravaille(new Date("2018-01-09T04:15:03.983Z")); // travail
jourtravaille(new Date("2021-11-01T18:01:55.046Z")); // ferie
