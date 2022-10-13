//Loading data in to script for sake of testing
//Will eventially host this elsewhere and access using fetch

const teams = 
[
    {"name":"Arsenal"},
    {"name":"Bournemouth"},
    {"name":"Aston Villa"},
    {"name":"Brentford"},
    {"name":"Brighton & Hove Albion"},
    {"name":"Burnley"},
    {"name":"Chelsea"},
    {"name":"Crystal Palace"},
    {"name":"Everton"},
    {"name":"Fulham"},
    {"name":"Leeds United"},
    {"name":"Leicester City"},
    {"name":"Liverpool"},
    {"name":"Manchester City"},
    {"name":"Newcastle United"},
    {"name":"Nottingham Forest"},
    {"name":"Southampton"},
    {"name":"Tottenham Hotspur"},
    {"name":"Watford"},
    {"name":"West Ham United"},
    {"name":"Wolverhampton Wanderers"}
    
];

const results21to22 = 
[
    {"match":"Arsenal_Aston Villa", "result":"3–1"},
    {"match":"Arsenal_Brentford", "result":"2–1"},
    {"match":"Arsenal_Brighton & Hove Albion", "result":"1–2"},
    {"match":"Arsenal_Burnley", "result":"0–0"},
    {"match":"Arsenal_Chelsea", "result":"0–2"},
    {"match":"Arsenal_Crystal Palace", "result":"2–2"},
    {"match":"Arsenal_Everton", "result":"5–1"},
    {"match":"Arsenal_Leeds United", "result":"2–1"},
    {"match":"Arsenal_Leicester City", "result":"2–0"},
    {"match":"Arsenal_Liverpool", "result":"0–2"},
    {"match":"Arsenal_Manchester City", "result":"1–2"},
    {"match":"Arsenal_Manchester United", "result":"3–1"},
    {"match":"Arsenal_Newcastle United", "result":"2–0"},
    {"match":"Arsenal_Norwich City", "result":"1–0"},
    {"match":"Arsenal_Southampton", "result":"3–0"},
    {"match":"Arsenal_Tottenham Hotspur", "result":"3–1"},
    {"match":"Arsenal_Watford", "result":"1–0"},
    {"match":"Arsenal_West Ham United", "result":"2–0"},
    {"match":"Arsenal_Wolverhampton Wanderers", "result":"2–1"},
    {"match":"Aston Villa_Arsenal", "result":"0–1"},
    {"match":"Aston Villa_Brentford", "result":"1–1"},
    {"match":"Aston Villa_Brighton & Hove Albion", "result":"2–0"},
    {"match":"Aston Villa_Burnley", "result":"1–1"},
    {"match":"Aston Villa_Chelsea", "result":"1–3"},
    {"match":"Aston Villa_Crystal Palace", "result":"1–1"},
    {"match":"Aston Villa_Everton", "result":"3–0"},
    {"match":"Aston Villa_Leeds United", "result":"3–3"},
    {"match":"Aston Villa_Leicester City", "result":"2–1"},
    {"match":"Aston Villa_Liverpool", "result":"1–2"},
    {"match":"Aston Villa_Manchester City", "result":"1–2"},
    {"match":"Aston Villa_Manchester United", "result":"2–2"},
    {"match":"Aston Villa_Newcastle United", "result":"2–0"},
    {"match":"Aston Villa_Norwich City", "result":"2–0"},
    {"match":"Aston Villa_Southampton", "result":"4–0"},
    {"match":"Aston Villa_Tottenham Hotspur", "result":"0–4"},
    {"match":"Aston Villa_Watford", "result":"0–1"},
    {"match":"Aston Villa_West Ham United", "result":"1–4"},
    {"match":"Aston Villa_Wolverhampton Wanderers", "result":"2–3"},
    {"match":"Brentford_Arsenal", "result":"2–0"},
    {"match":"Brentford_Aston Villa", "result":"2–1"},
    {"match":"Brentford_Brighton & Hove Albion", "result":"0–1"},
    {"match":"Brentford_Burnley", "result":"2–0"},
    {"match":"Brentford_Chelsea", "result":"0–1"},
    {"match":"Brentford_Crystal Palace", "result":"0–0"},
    {"match":"Brentford_Everton", "result":"1–0"},
    {"match":"Brentford_Leeds United", "result":"1–2"},
    {"match":"Brentford_Leicester City", "result":"1–2"},
    {"match":"Brentford_Liverpool", "result":"3–3"},
    {"match":"Brentford_Manchester City", "result":"0–1"},
    {"match":"Brentford_Manchester United", "result":"1–3"},
    {"match":"Brentford_Newcastle United", "result":"0–2"},
    {"match":"Brentford_Norwich City", "result":"1–2"},
    {"match":"Brentford_Southampton", "result":"3–0"},
    {"match":"Brentford_Tottenham Hotspur", "result":"0–0"},
    {"match":"Brentford_Watford", "result":"2–1"},
    {"match":"Brentford_West Ham United", "result":"2–0"},
    {"match":"Brentford_Wolverhampton Wanderers", "result":"1–2"},
    {"match":"Brighton & Hove Albion_Arsenal", "result":"0–0"},
    {"match":"Brighton & Hove Albion_Aston Villa", "result":"0–2"},
    {"match":"Brighton & Hove Albion_Brentford", "result":"2–0"},
    {"match":"Brighton & Hove Albion_Burnley", "result":"0–3"},
    {"match":"Brighton & Hove Albion_Chelsea", "result":"1–1"},
    {"match":"Brighton & Hove Albion_Crystal Palace", "result":"1–1"},
    {"match":"Brighton & Hove Albion_Everton", "result":"0–2"},
    {"match":"Brighton & Hove Albion_Leeds United", "result":"0–0"},
    {"match":"Brighton & Hove Albion_Leicester City", "result":"2–1"},
    {"match":"Brighton & Hove Albion_Liverpool", "result":"0–2"},
    {"match":"Brighton & Hove Albion_Manchester City", "result":"1–4"},
    {"match":"Brighton & Hove Albion_Manchester United", "result":"4–0"},
    {"match":"Brighton & Hove Albion_Newcastle United", "result":"1–1"},
    {"match":"Brighton & Hove Albion_Norwich City", "result":"0–0"},
    {"match":"Brighton & Hove Albion_Southampton", "result":"2–2"},
    {"match":"Brighton & Hove Albion_Tottenham Hotspur", "result":"0–2"},
    {"match":"Brighton & Hove Albion_Watford", "result":"2–0"},
    {"match":"Brighton & Hove Albion_West Ham United", "result":"3–1"},
    {"match":"Brighton & Hove Albion_Wolverhampton Wanderers", "result":"0–1"},
    {"match":"Burnley_Arsenal", "result":"0–1"},
    {"match":"Burnley_Aston Villa", "result":"1–3"},
    {"match":"Burnley_Brentford", "result":"3–1"},
    {"match":"Burnley_Brighton & Hove Albion", "result":"1–2"},
    {"match":"Burnley_Chelsea", "result":"0–4"},
    {"match":"Burnley_Crystal Palace", "result":"3–3"},
    {"match":"Burnley_Everton", "result":"3–2"},
    {"match":"Burnley_Leeds United", "result":"1–1"},
    {"match":"Burnley_Leicester City", "result":"0–2"},
    {"match":"Burnley_Liverpool", "result":"0–1"},
    {"match":"Burnley_Manchester City", "result":"0–2"},
    {"match":"Burnley_Manchester United", "result":"1–1"},
    {"match":"Burnley_Newcastle United", "result":"1–2"},
    {"match":"Burnley_Norwich City", "result":"0–0"},
    {"match":"Burnley_Southampton", "result":"2–0"},
    {"match":"Burnley_Tottenham Hotspur", "result":"1–0"},
    {"match":"Burnley_Watford", "result":"0–0"},
    {"match":"Burnley_West Ham United", "result":"0–0"},
    {"match":"Burnley_Wolverhampton Wanderers", "result":"1–0"},
    {"match":"Chelsea_Arsenal", "result":"2–4"},
    {"match":"Chelsea_Aston Villa", "result":"3–0"},
    {"match":"Chelsea_Brentford", "result":"1–4"},
    {"match":"Chelsea_Brighton & Hove Albion", "result":"1–1"},
    {"match":"Chelsea_Burnley", "result":"1–1"},
    {"match":"Chelsea_Crystal Palace", "result":"3–0"},
    {"match":"Chelsea_Everton", "result":"1–1"},
    {"match":"Chelsea_Leeds United", "result":"3–2"},
    {"match":"Chelsea_Leicester City", "result":"1–1"},
    {"match":"Chelsea_Liverpool", "result":"2–2"},
    {"match":"Chelsea_Manchester City", "result":"0–1"},
    {"match":"Chelsea_Manchester United", "result":"1–1"},
    {"match":"Chelsea_Newcastle United", "result":"1–0"},
    {"match":"Chelsea_Norwich City", "result":"7–0"},
    {"match":"Chelsea_Southampton", "result":"3–1"},
    {"match":"Chelsea_Tottenham Hotspur", "result":"2–0"},
    {"match":"Chelsea_Watford", "result":"2–1"},
    {"match":"Chelsea_West Ham United", "result":"1–0"},
    {"match":"Chelsea_Wolverhampton Wanderers", "result":"2–2"},
    {"match":"Crystal Palace_Arsenal", "result":"3–0"},
    {"match":"Crystal Palace_Aston Villa", "result":"1–2"},
    {"match":"Crystal Palace_Brentford", "result":"0–0"},
    {"match":"Crystal Palace_Brighton & Hove Albion", "result":"1–1"},
    {"match":"Crystal Palace_Burnley", "result":"1–1"},
    {"match":"Crystal Palace_Chelsea", "result":"0–1"},
    {"match":"Crystal Palace_Everton", "result":"3–1"},
    {"match":"Crystal Palace_Leeds United", "result":"0–0"},
    {"match":"Crystal Palace_Leicester City", "result":"2–2"},
    {"match":"Crystal Palace_Liverpool", "result":"1–3"},
    {"match":"Crystal Palace_Manchester City", "result":"0–0 "},
    {"match":"Crystal Palace_Manchester United", "result":"1–0"},
    {"match":"Crystal Palace_Newcastle United", "result":"1–1"},
    {"match":"Crystal Palace_Norwich City", "result":"3–0"},
    {"match":"Crystal Palace_Southampton", "result":"2–2"},
    {"match":"Crystal Palace_Tottenham Hotspur", "result":"3–0"},
    {"match":"Crystal Palace_Watford", "result":"1–0"},
    {"match":"Crystal Palace_West Ham United", "result":"2–3"},
    {"match":"Crystal Palace_Wolverhampton Wanderers", "result":"2–0"},
    {"match":"Everton_Arsenal", "result":"2–1"},
    {"match":"Everton_Aston Villa", "result":"0–1"},
    {"match":"Everton_Brentford", "result":"2–3"},
    {"match":"Everton_Brighton & Hove Albion", "result":"2–3"},
    {"match":"Everton_Burnley", "result":"3–1"},
    {"match":"Everton_Chelsea", "result":"1–0"},
    {"match":"Everton_Crystal Palace", "result":"3–2"},
    {"match":"Everton_Leeds United", "result":"3–0"},
    {"match":"Everton_Leicester City", "result":"1–1"},
    {"match":"Everton_Liverpool", "result":"1–4"},
    {"match":"Everton_Manchester City", "result":"0–1"},
    {"match":"Everton_Manchester United", "result":"1–0"},
    {"match":"Everton_Newcastle United", "result":"1–0"},
    {"match":"Everton_Norwich City", "result":"2–0"},
    {"match":"Everton_Southampton", "result":"3–1"},
    {"match":"Everton_Tottenham Hotspur", "result":"0–0"},
    {"match":"Everton_Watford", "result":"2–5"},
    {"match":"Everton_West Ham United", "result":"0–1"},
    {"match":"Everton_Wolverhampton Wanderers", "result":"0–1"},
    {"match":"Leeds United_Arsenal", "result":"1–4"},
    {"match":"Leeds United_Aston Villa", "result":"0–3"},
    {"match":"Leeds United_Brentford", "result":"2–2"},
    {"match":"Leeds United_Brighton & Hove Albion", "result":"1–1"},
    {"match":"Leeds United_Burnley", "result":"3–1"},
    {"match":"Leeds United_Chelsea", "result":"0–3"},
    {"match":"Leeds United_Crystal Palace", "result":"1–0"},
    {"match":"Leeds United_Everton", "result":"2–2"},
    {"match":"Leeds United_Leicester City", "result":"1–1"},
    {"match":"Leeds United_Liverpool", "result":"0–3"},
    {"match":"Leeds United_Manchester City", "result":"0–4"},
    {"match":"Leeds United_Manchester United", "result":"2–4"},
    {"match":"Leeds United_Newcastle United", "result":"0–1"},
    {"match":"Leeds United_Norwich City", "result":"2–1"},
    {"match":"Leeds United_Southampton", "result":"1–1"},
    {"match":"Leeds United_Tottenham Hotspur", "result":"0–4"},
    {"match":"Leeds United_Watford", "result":"1–0"},
    {"match":"Leeds United_West Ham United", "result":"1–2"},
    {"match":"Leeds United_Wolverhampton Wanderers", "result":"1–1"},
    {"match":"Leicester City_Arsenal", "result":"0–2"},
    {"match":"Leicester City_Aston Villa", "result":"0–0"},
    {"match":"Leicester City_Brentford", "result":"2–1"},
    {"match":"Leicester City_Brighton & Hove Albion", "result":"1–1"},
    {"match":"Leicester City_Burnley", "result":"2–2"},
    {"match":"Leicester City_Chelsea", "result":"0–3"},
    {"match":"Leicester City_Crystal Palace", "result":"2–1"},
    {"match":"Leicester City_Everton", "result":"1–2"},
    {"match":"Leicester City_Leeds United", "result":"1–0"},
    {"match":"Leicester City_Liverpool", "result":"1–0"},
    {"match":"Leicester City_Manchester City", "result":"0–1"},
    {"match":"Leicester City_Manchester United", "result":"4–2"},
    {"match":"Leicester City_Newcastle United", "result":"4–0"},
    {"match":"Leicester City_Norwich City", "result":"3–0"},
    {"match":"Leicester City_Southampton", "result":"4–1"},
    {"match":"Leicester City_Tottenham Hotspur", "result":"2–3"},
    {"match":"Leicester City_Watford", "result":"4–2"},
    {"match":"Leicester City_West Ham United", "result":"2–2"},
    {"match":"Leicester City_Wolverhampton Wanderers", "result":"1–0"},
    {"match":"Liverpool_Arsenal", "result":"4–0"},
    {"match":"Liverpool_Aston Villa", "result":"1–0"},
    {"match":"Liverpool_Brentford", "result":"3–0"},
    {"match":"Liverpool_Brighton & Hove Albion", "result":"2–2"},
    {"match":"Liverpool_Burnley", "result":"2–0"},
    {"match":"Liverpool_Chelsea", "result":"1–1"},
    {"match":"Liverpool_Crystal Palace", "result":"3–0"},
    {"match":"Liverpool_Everton", "result":"2–0"},
    {"match":"Liverpool_Leeds United", "result":"6–0"},
    {"match":"Liverpool_Leicester City", "result":"2–0"},
    {"match":"Liverpool_Manchester City", "result":"2–2"},
    {"match":"Liverpool_Manchester United", "result":"4–0"},
    {"match":"Liverpool_Newcastle United", "result":"3–1"},
    {"match":"Liverpool_Norwich City", "result":"3–1"},
    {"match":"Liverpool_Southampton", "result":"4–0"},
    {"match":"Liverpool_Tottenham Hotspur", "result":"1–1"},
    {"match":"Liverpool_Watford", "result":"2–0"},
    {"match":"Liverpool_West Ham United", "result":"1–0"},
    {"match":"Liverpool_Wolverhampton Wanderers", "result":"3–1"},
    {"match":"Manchester City_Arsenal", "result":"5–0"},
    {"match":"Manchester City_Aston Villa", "result":"3–2"},
    {"match":"Manchester City_Brentford", "result":"2–0"},
    {"match":"Manchester City_Brighton & Hove Albion", "result":"3–0"},
    {"match":"Manchester City_Burnley", "result":"2–0"},
    {"match":"Manchester City_Chelsea", "result":"1–0"},
    {"match":"Manchester City_Crystal Palace", "result":"0–2"},
    {"match":"Manchester City_Everton", "result":"3–0"},
    {"match":"Manchester City_Leeds United", "result":"7–0"},
    {"match":"Manchester City_Leicester City", "result":"6–3"},
    {"match":"Manchester City_Liverpool", "result":"2–2"},
    {"match":"Manchester City_Manchester United", "result":"4–1"},
    {"match":"Manchester City_Newcastle United", "result":"5–0"},
    {"match":"Manchester City_Norwich City", "result":"5–0"},
    {"match":"Manchester City_Southampton", "result":"0–0"},
    {"match":"Manchester City_Tottenham Hotspur", "result":"2–3"},
    {"match":"Manchester City_Watford", "result":"5–1"},
    {"match":"Manchester City_West Ham United", "result":"2–1"},
    {"match":"Manchester City_Wolverhampton Wanderers", "result":"1–0"},
    {"match":"Manchester United_Arsenal", "result":"3–2"},
    {"match":"Manchester United_Aston Villa", "result":"0–1"},
    {"match":"Manchester United_Brentford", "result":"3–0"},
    {"match":"Manchester United_Brighton & Hove Albion", "result":"2–0"},
    {"match":"Manchester United_Burnley", "result":"3–1"},
    {"match":"Manchester United_Chelsea", "result":"1–1"},
    {"match":"Manchester United_Crystal Palace", "result":"1–0"},
    {"match":"Manchester United_Everton", "result":"1–1"},
    {"match":"Manchester United_Leeds United", "result":"5–1"},
    {"match":"Manchester United_Leicester City", "result":"1–1"},
    {"match":"Manchester United_Liverpool", "result":"0–5"},
    {"match":"Manchester United_Manchester City", "result":"0–2"},
    {"match":"Manchester United_Newcastle United", "result":"4–1"},
    {"match":"Manchester United_Norwich City", "result":"3–2"},
    {"match":"Manchester United_Southampton", "result":"1–1"},
    {"match":"Manchester United_Tottenham Hotspur", "result":"3–2"},
    {"match":"Manchester United_Watford", "result":"0–0"},
    {"match":"Manchester United_West Ham United", "result":"1–0"},
    {"match":"Manchester United_Wolverhampton Wanderers", "result":"0–1"},
    {"match":"Newcastle United_Arsenal", "result":"2–0"},
    {"match":"Newcastle United_Aston Villa", "result":"1–0"},
    {"match":"Newcastle United_Brentford", "result":"3–3"},
    {"match":"Newcastle United_Brighton & Hove Albion", "result":"2–1"},
    {"match":"Newcastle United_Burnley", "result":"1–0"},
    {"match":"Newcastle United_Chelsea", "result":"0–3"},
    {"match":"Newcastle United_Crystal Palace", "result":"1–0"},
    {"match":"Newcastle United_Everton", "result":"3–1"},
    {"match":"Newcastle United_Leeds United", "result":"1–1"},
    {"match":"Newcastle United_Leicester City", "result":"2–1"},
    {"match":"Newcastle United_Liverpool", "result":"0–1"},
    {"match":"Newcastle United_Manchester City", "result":"0–4"},
    {"match":"Newcastle United_Manchester United", "result":"1–1"},
    {"match":"Newcastle United_Norwich City", "result":"1–1"},
    {"match":"Newcastle United_Southampton", "result":"2–2"},
    {"match":"Newcastle United_Tottenham Hotspur", "result":"2–3"},
    {"match":"Newcastle United_Watford", "result":"1–1"},
    {"match":"Newcastle United_West Ham United", "result":"2–4"},
    {"match":"Newcastle United_Wolverhampton Wanderers", "result":"1–0"},
    {"match":"Norwich City_Arsenal", "result":"0–5"},
    {"match":"Norwich City_Aston Villa", "result":"0–2"},
    {"match":"Norwich City_Brentford", "result":"1–3"},
    {"match":"Norwich City_Brighton & Hove Albion", "result":"0–0"},
    {"match":"Norwich City_Burnley", "result":"2–0"},
    {"match":"Norwich City_Chelsea", "result":"1–3"},
    {"match":"Norwich City_Crystal Palace", "result":"1–1"},
    {"match":"Norwich City_Everton", "result":"2–1"},
    {"match":"Norwich City_Leeds United", "result":"1–2"},
    {"match":"Norwich City_Leicester City", "result":"1–2"},
    {"match":"Norwich City_Liverpool", "result":"0–3"},
    {"match":"Norwich City_Manchester City", "result":"0–4"},
    {"match":"Norwich City_Manchester United", "result":"0–1"},
    {"match":"Norwich City_Newcastle United", "result":"0–3"},
    {"match":"Norwich City_Southampton", "result":"2–1"},
    {"match":"Norwich City_Tottenham Hotspur", "result":"0–5"},
    {"match":"Norwich City_Watford", "result":"1–3"},
    {"match":"Norwich City_West Ham United", "result":"0–4"},
    {"match":"Norwich City_Wolverhampton Wanderers", "result":"0–0"},
    {"match":"Southampton_Arsenal", "result":"1–0"},
    {"match":"Southampton_Aston Villa", "result":"1–0"},
    {"match":"Southampton_Brentford", "result":"4–1"},
    {"match":"Southampton_Brighton & Hove Albion", "result":"1–1"},
    {"match":"Southampton_Burnley", "result":"2–2"},
    {"match":"Southampton_Chelsea", "result":"0–6"},
    {"match":"Southampton_Crystal Palace", "result":"1–2"},
    {"match":"Southampton_Everton", "result":"2–0"},
    {"match":"Southampton_Leeds United", "result":"1–0"},
    {"match":"Southampton_Leicester City", "result":"2–2"},
    {"match":"Southampton_Liverpool", "result":"1–2"},
    {"match":"Southampton_Manchester City", "result":"1–1"},
    {"match":"Southampton_Manchester United", "result":"1–1"},
    {"match":"Southampton_Newcastle United", "result":"1–2"},
    {"match":"Southampton_Norwich City", "result":"2–0"},
    {"match":"Southampton_Tottenham Hotspur", "result":"1–1"},
    {"match":"Southampton_Watford", "result":"1–2"},
    {"match":"Southampton_West Ham United", "result":"0–0"},
    {"match":"Southampton_Wolverhampton Wanderers", "result":"0–1"},
    {"match":"Tottenham Hotspur_Arsenal", "result":"3–0"},
    {"match":"Tottenham Hotspur_Aston Villa", "result":"2–1"},
    {"match":"Tottenham Hotspur_Brentford", "result":"2–0"},
    {"match":"Tottenham Hotspur_Brighton & Hove Albion", "result":"0–1"},
    {"match":"Tottenham Hotspur_Burnley", "result":"1–0"},
    {"match":"Tottenham Hotspur_Chelsea", "result":"0–3"},
    {"match":"Tottenham Hotspur_Crystal Palace", "result":"3–0"},
    {"match":"Tottenham Hotspur_Everton", "result":"5–0"},
    {"match":"Tottenham Hotspur_Leeds United", "result":"2–1"},
    {"match":"Tottenham Hotspur_Leicester City", "result":"3–1"},
    {"match":"Tottenham Hotspur_Liverpool", "result":"2–2"},
    {"match":"Tottenham Hotspur_Manchester City", "result":"1–0"},
    {"match":"Tottenham Hotspur_Manchester United", "result":"0–3"},
    {"match":"Tottenham Hotspur_Newcastle United", "result":"5–1"},
    {"match":"Tottenham Hotspur_Norwich City", "result":"3–0"},
    {"match":"Tottenham Hotspur_Southampton", "result":"2–3"},
    {"match":"Tottenham Hotspur_Watford", "result":"1–0"},
    {"match":"Tottenham Hotspur_West Ham United", "result":"3–1"},
    {"match":"Tottenham Hotspur_Wolverhampton Wanderers", "result":"0–2"},
    {"match":"Watford_Arsenal", "result":"2–3"},
    {"match":"Watford_Aston Villa", "result":"3–2"},
    {"match":"Watford_Brentford", "result":"1–2"},
    {"match":"Watford_Brighton & Hove Albion", "result":"0–2"},
    {"match":"Watford_Burnley", "result":"1–2"},
    {"match":"Watford_Chelsea", "result":"1–2"},
    {"match":"Watford_Crystal Palace", "result":"1–4"},
    {"match":"Watford_Everton", "result":"0–0"},
    {"match":"Watford_Leeds United", "result":"0–3"},
    {"match":"Watford_Leicester City", "result":"1–5"},
    {"match":"Watford_Liverpool", "result":"0–5"},
    {"match":"Watford_Manchester City", "result":"1–3"},
    {"match":"Watford_Manchester United", "result":"4–1"},
    {"match":"Watford_Newcastle United", "result":"1–1"},
    {"match":"Watford_Norwich City", "result":"0–3"},
    {"match":"Watford_Southampton", "result":"0–1"},
    {"match":"Watford_Tottenham Hotspur", "result":"0–1"},
    {"match":"Watford_West Ham United", "result":"1–4"},
    {"match":"Watford_Wolverhampton Wanderers", "result":"0–2"},
    {"match":"West Ham United_Arsenal", "result":"1–2"},
    {"match":"West Ham United_Aston Villa", "result":"2–1"},
    {"match":"West Ham United_Brentford", "result":"1–2"},
    {"match":"West Ham United_Brighton & Hove Albion", "result":"1–1"},
    {"match":"West Ham United_Burnley", "result":"1–1"},
    {"match":"West Ham United_Chelsea", "result":"3–2"},
    {"match":"West Ham United_Crystal Palace", "result":"2–2"},
    {"match":"West Ham United_Everton", "result":"2–1"},
    {"match":"West Ham United_Leeds United", "result":"2–3"},
    {"match":"West Ham United_Leicester City", "result":"4–1"},
    {"match":"West Ham United_Liverpool", "result":"3–2"},
    {"match":"West Ham United_Manchester City", "result":"2–2"},
    {"match":"West Ham United_Manchester United", "result":"1–2"},
    {"match":"West Ham United_Newcastle United", "result":"1–1"},
    {"match":"West Ham United_Norwich City", "result":"2–0"},
    {"match":"West Ham United_Southampton", "result":"2–3"},
    {"match":"West Ham United_Tottenham Hotspur", "result":"1–0"},
    {"match":"West Ham United_Watford", "result":"1–0"},
    {"match":"West Ham United_Wolverhampton Wanderers", "result":"1–0"},
    {"match":"Wolverhampton Wanderers_Arsenal", "result":"0–1"},
    {"match":"Wolverhampton Wanderers_Aston Villa", "result":"2–1"},
    {"match":"Wolverhampton Wanderers_Brentford", "result":"0–2"},
    {"match":"Wolverhampton Wanderers_Brighton & Hove Albion", "result":"0–3"},
    {"match":"Wolverhampton Wanderers_Burnley", "result":"0–0"},
    {"match":"Wolverhampton Wanderers_Chelsea", "result":"0–0"},
    {"match":"Wolverhampton Wanderers_Crystal Palace", "result":"0–2"},
    {"match":"Wolverhampton Wanderers_Everton", "result":"2–1"},
    {"match":"Wolverhampton Wanderers_Leeds United", "result":"2–3"},
    {"match":"Wolverhampton Wanderers_Leicester City", "result":"2–1"},
    {"match":"Wolverhampton Wanderers_Liverpool", "result":"0–1"},
    {"match":"Wolverhampton Wanderers_Manchester City", "result":"1–5"},
    {"match":"Wolverhampton Wanderers_Manchester United", "result":"0–1"},
    {"match":"Wolverhampton Wanderers_Newcastle United", "result":"2–1"},
    {"match":"Wolverhampton Wanderers_Norwich City", "result":"1–1"},
    {"match":"Wolverhampton Wanderers_Southampton", "result":"3–1"},
    {"match":"Wolverhampton Wanderers_Tottenham Hotspur", "result":"0–1"},
    {"match":"Wolverhampton Wanderers_Watford", "result":"4–0"},
    {"match":"Wolverhampton Wanderers_West Ham United", "result":"1–0"}
];

const results22to23 = 
[
    {"match":"Arsenal_Aston Villa", "result":"2–1"},
    {"match":"Arsenal_Bournemouth", "result":""},
    {"match":"Arsenal_Brentford", "result":""},
    {"match":"Arsenal_Brighton & Hove Albion", "result":""},
    {"match":"Arsenal_Chelsea", "result":""},
    {"match":"Arsenal_Crystal Palace", "result":""},
    {"match":"Arsenal_Everton", "result":""},
    {"match":"Arsenal_Fulham", "result":"2–1"},
    {"match":"Arsenal_Leeds United", "result":""},
    {"match":"Arsenal_Leicester City", "result":"4–2"},
    {"match":"Arsenal_Liverpool", "result":""},
    {"match":"Arsenal_Manchester City", "result":""},
    {"match":"Arsenal_Manchester United", "result":""},
    {"match":"Arsenal_Newcastle United", "result":""},
    {"match":"Arsenal_Nottingham Forest", "result":""},
    {"match":"Arsenal_Southampton", "result":""},
    {"match":"Arsenal_Tottenham Hotspur", "result":""},
    {"match":"Arsenal_West Ham United", "result":""},
    {"match":"Arsenal_Wolverhampton Wanderers", "result":""},
    {"match":"Aston Villa_Arsenal", "result":""},
    {"match":"Aston Villa_Bournemouth", "result":""},
    {"match":"Aston Villa_Brentford", "result":""},
    {"match":"Aston Villa_Brighton & Hove Albion", "result":""},
    {"match":"Aston Villa_Chelsea", "result":""},
    {"match":"Aston Villa_Crystal Palace", "result":""},
    {"match":"Aston Villa_Everton", "result":"2–1"},
    {"match":"Aston Villa_Fulham", "result":""},
    {"match":"Aston Villa_Leeds United", "result":""},
    {"match":"Aston Villa_Leicester City", "result":""},
    {"match":"Aston Villa_Liverpool", "result":""},
    {"match":"Aston Villa_Manchester City", "result":"1–1"},
    {"match":"Aston Villa_Manchester United", "result":""},
    {"match":"Aston Villa_Newcastle United", "result":""},
    {"match":"Aston Villa_Nottingham Forest", "result":""},
    {"match":"Aston Villa_Southampton", "result":"1–0"},
    {"match":"Aston Villa_Tottenham Hotspur", "result":""},
    {"match":"Aston Villa_West Ham United", "result":"0–1"},
    {"match":"Aston Villa_Wolverhampton Wanderers", "result":""},
    {"match":"Bournemouth_Arsenal", "result":"0–3"},
    {"match":"Bournemouth_Aston Villa", "result":"2–0"},
    {"match":"Bournemouth_Brentford", "result":""},
    {"match":"Bournemouth_Brighton & Hove Albion", "result":""},
    {"match":"Bournemouth_Chelsea", "result":""},
    {"match":"Bournemouth_Crystal Palace", "result":""},
    {"match":"Bournemouth_Everton", "result":""},
    {"match":"Bournemouth_Fulham", "result":""},
    {"match":"Bournemouth_Leeds United", "result":""},
    {"match":"Bournemouth_Leicester City", "result":""},
    {"match":"Bournemouth_Liverpool", "result":""},
    {"match":"Bournemouth_Manchester City", "result":""},
    {"match":"Bournemouth_Manchester United", "result":""},
    {"match":"Bournemouth_Newcastle United", "result":""},
    {"match":"Bournemouth_Nottingham Forest", "result":""},
    {"match":"Bournemouth_Southampton", "result":""},
    {"match":"Bournemouth_Tottenham Hotspur", "result":""},
    {"match":"Bournemouth_West Ham United", "result":""},
    {"match":"Bournemouth_Wolverhampton Wanderers", "result":"0–0"},
    {"match":"Brentford_Arsenal", "result":"0–3"},
    {"match":"Brentford_Aston Villa", "result":""},
    {"match":"Brentford_Bournemouth", "result":""},
    {"match":"Brentford_Brighton & Hove Albion", "result":""},
    {"match":"Brentford_Chelsea", "result":""},
    {"match":"Brentford_Crystal Palace", "result":""},
    {"match":"Brentford_Everton", "result":"1–1"},
    {"match":"Brentford_Fulham", "result":""},
    {"match":"Brentford_Leeds United", "result":"5–2"},
    {"match":"Brentford_Leicester City", "result":""},
    {"match":"Brentford_Liverpool", "result":""},
    {"match":"Brentford_Manchester City", "result":""},
    {"match":"Brentford_Manchester United", "result":"4–0"},
    {"match":"Brentford_Newcastle United", "result":""},
    {"match":"Brentford_Nottingham Forest", "result":""},
    {"match":"Brentford_Southampton", "result":""},
    {"match":"Brentford_Tottenham Hotspur", "result":""},
    {"match":"Brentford_West Ham United", "result":""},
    {"match":"Brentford_Wolverhampton Wanderers", "result":""},
    {"match":"Brighton & Hove Albion_Arsenal", "result":""},
    {"match":"Brighton & Hove Albion_Aston Villa", "result":""},
    {"match":"Brighton & Hove Albion_Bournemouth", "result":""},
    {"match":"Brighton & Hove Albion_Brentford", "result":""},
    {"match":"Brighton & Hove Albion_Chelsea", "result":""},
    {"match":"Brighton & Hove Albion_Crystal Palace", "result":""},
    {"match":"Brighton & Hove Albion_Everton", "result":""},
    {"match":"Brighton & Hove Albion_Fulham", "result":""},
    {"match":"Brighton & Hove Albion_Leeds United", "result":"1–0"},
    {"match":"Brighton & Hove Albion_Leicester City", "result":"5–2"},
    {"match":"Brighton & Hove Albion_Liverpool", "result":""},
    {"match":"Brighton & Hove Albion_Manchester City", "result":""},
    {"match":"Brighton & Hove Albion_Manchester United", "result":""},
    {"match":"Brighton & Hove Albion_Newcastle United", "result":"0–0"},
    {"match":"Brighton & Hove Albion_Nottingham Forest", "result":""},
    {"match":"Brighton & Hove Albion_Southampton", "result":""},
    {"match":"Brighton & Hove Albion_Tottenham Hotspur", "result":""},
    {"match":"Brighton & Hove Albion_West Ham United", "result":""},
    {"match":"Brighton & Hove Albion_Wolverhampton Wanderers", "result":""},
    {"match":"Chelsea_Arsenal", "result":""},
    {"match":"Chelsea_Aston Villa", "result":""},
    {"match":"Chelsea_Bournemouth", "result":""},
    {"match":"Chelsea_Brentford", "result":""},
    {"match":"Chelsea_Brighton & Hove Albion", "result":""},
    {"match":"Chelsea_Crystal Palace", "result":""},
    {"match":"Chelsea_Everton", "result":""},
    {"match":"Chelsea_Fulham", "result":""},
    {"match":"Chelsea_Leeds United", "result":""},
    {"match":"Chelsea_Leicester City", "result":"2–1"},
    {"match":"Chelsea_Liverpool", "result":" "},
    {"match":"Chelsea_Manchester City", "result":""},
    {"match":"Chelsea_Manchester United", "result":""},
    {"match":"Chelsea_Newcastle United", "result":""},
    {"match":"Chelsea_Nottingham Forest", "result":""},
    {"match":"Chelsea_Southampton", "result":""},
    {"match":"Chelsea_Tottenham Hotspur", "result":"2–2"},
    {"match":"Chelsea_West Ham United", "result":"2–1"},
    {"match":"Chelsea_Wolverhampton Wanderers", "result":""},
    {"match":"Crystal Palace_Arsenal", "result":"0–2"},
    {"match":"Crystal Palace_Aston Villa", "result":"3–1"},
    {"match":"Crystal Palace_Bournemouth", "result":""},
    {"match":"Crystal Palace_Brentford", "result":"1–1"},
    {"match":"Crystal Palace_Brighton & Hove Albion", "result":""},
    {"match":"Crystal Palace_Chelsea", "result":""},
    {"match":"Crystal Palace_Everton", "result":""},
    {"match":"Crystal Palace_Fulham", "result":""},
    {"match":"Crystal Palace_Leeds United", "result":""},
    {"match":"Crystal Palace_Leicester City", "result":""},
    {"match":"Crystal Palace_Liverpool", "result":""},
    {"match":"Crystal Palace_Manchester City", "result":""},
    {"match":"Crystal Palace_Manchester United", "result":""},
    {"match":"Crystal Palace_Newcastle United", "result":""},
    {"match":"Crystal Palace_Nottingham Forest", "result":""},
    {"match":"Crystal Palace_Southampton", "result":""},
    {"match":"Crystal Palace_Tottenham Hotspur", "result":""},
    {"match":"Crystal Palace_West Ham United", "result":""},
    {"match":"Crystal Palace_Wolverhampton Wanderers", "result":""},
    {"match":"Everton_Arsenal", "result":""},
    {"match":"Everton_Aston Villa", "result":""},
    {"match":"Everton_Bournemouth", "result":""},
    {"match":"Everton_Brentford", "result":""},
    {"match":"Everton_Brighton & Hove Albion", "result":""},
    {"match":"Everton_Chelsea", "result":"0–1"},
    {"match":"Everton_Crystal Palace", "result":""},
    {"match":"Everton_Fulham", "result":""},
    {"match":"Everton_Leeds United", "result":""},
    {"match":"Everton_Leicester City", "result":""},
    {"match":"Everton_Liverpool", "result":"0–0"},
    {"match":"Everton_Manchester City", "result":""},
    {"match":"Everton_Manchester United", "result":""},
    {"match":"Everton_Newcastle United", "result":""},
    {"match":"Everton_Nottingham Forest", "result":"1–1"},
    {"match":"Everton_Southampton", "result":""},
    {"match":"Everton_Tottenham Hotspur", "result":""},
    {"match":"Everton_West Ham United", "result":"1–0"},
    {"match":"Everton_Wolverhampton Wanderers", "result":""},
    {"match":"Fulham_Arsenal", "result":""},
    {"match":"Fulham_Aston Villa", "result":""},
    {"match":"Fulham_Bournemouth", "result":""},
    {"match":"Fulham_Brentford", "result":"3–2"},
    {"match":"Fulham_Brighton & Hove Albion", "result":"2–1"},
    {"match":"Fulham_Chelsea", "result":""},
    {"match":"Fulham_Crystal Palace", "result":""},
    {"match":"Fulham_Everton", "result":""},
    {"match":"Fulham_Leeds United", "result":""},
    {"match":"Fulham_Leicester City", "result":""},
    {"match":"Fulham_Liverpool", "result":"2–2"},
    {"match":"Fulham_Manchester City", "result":""},
    {"match":"Fulham_Manchester United", "result":""},
    {"match":"Fulham_Newcastle United", "result":""},
    {"match":"Fulham_Nottingham Forest", "result":""},
    {"match":"Fulham_Southampton", "result":""},
    {"match":"Fulham_Tottenham Hotspur", "result":""},
    {"match":"Fulham_West Ham United", "result":""},
    {"match":"Fulham_Wolverhampton Wanderers", "result":""},
    {"match":"Leeds United_Arsenal", "result":""},
    {"match":"Leeds United_Aston Villa", "result":""},
    {"match":"Leeds United_Bournemouth", "result":""},
    {"match":"Leeds United_Brentford", "result":""},
    {"match":"Leeds United_Brighton & Hove Albion", "result":""},
    {"match":"Leeds United_Chelsea", "result":"3–0"},
    {"match":"Leeds United_Crystal Palace", "result":""},
    {"match":"Leeds United_Everton", "result":"1–1"},
    {"match":"Leeds United_Fulham", "result":""},
    {"match":"Leeds United_Leicester City", "result":""},
    {"match":"Leeds United_Liverpool", "result":""},
    {"match":"Leeds United_Manchester City", "result":""},
    {"match":"Leeds United_Manchester United", "result":""},
    {"match":"Leeds United_Newcastle United", "result":""},
    {"match":"Leeds United_Nottingham Forest", "result":""},
    {"match":"Leeds United_Southampton", "result":""},
    {"match":"Leeds United_Tottenham Hotspur", "result":""},
    {"match":"Leeds United_West Ham United", "result":""},
    {"match":"Leeds United_Wolverhampton Wanderers", "result":"2–1"},
    {"match":"Leicester City_Arsenal", "result":""},
    {"match":"Leicester City_Aston Villa", "result":""},
    {"match":"Leicester City_Bournemouth", "result":""},
    {"match":"Leicester City_Brentford", "result":"2–2"},
    {"match":"Leicester City_Brighton & Hove Albion", "result":""},
    {"match":"Leicester City_Chelsea", "result":""},
    {"match":"Leicester City_Crystal Palace", "result":""},
    {"match":"Leicester City_Everton", "result":""},
    {"match":"Leicester City_Fulham", "result":""},
    {"match":"Leicester City_Leeds United", "result":""},
    {"match":"Leicester City_Liverpool", "result":""},
    {"match":"Leicester City_Manchester City", "result":""},
    {"match":"Leicester City_Manchester United", "result":"0–1"},
    {"match":"Leicester City_Newcastle United", "result":""},
    {"match":"Leicester City_Nottingham Forest", "result":""},
    {"match":"Leicester City_Southampton", "result":"1–2"},
    {"match":"Leicester City_Tottenham Hotspur", "result":""},
    {"match":"Leicester City_West Ham United", "result":""},
    {"match":"Leicester City_Wolverhampton Wanderers", "result":""},
    {"match":"Liverpool_Arsenal", "result":""},
    {"match":"Liverpool_Aston Villa", "result":""},
    {"match":"Liverpool_Bournemouth", "result":"9–0"},
    {"match":"Liverpool_Brentford", "result":""},
    {"match":"Liverpool_Brighton & Hove Albion", "result":""},
    {"match":"Liverpool_Chelsea", "result":""},
    {"match":"Liverpool_Crystal Palace", "result":"1–1"},
    {"match":"Liverpool_Everton", "result":""},
    {"match":"Liverpool_Fulham", "result":""},
    {"match":"Liverpool_Leeds United", "result":""},
    {"match":"Liverpool_Leicester City", "result":""},
    {"match":"Liverpool_Manchester City", "result":""},
    {"match":"Liverpool_Manchester United", "result":""},
    {"match":"Liverpool_Newcastle United", "result":"2–1"},
    {"match":"Liverpool_Nottingham Forest", "result":""},
    {"match":"Liverpool_Southampton", "result":""},
    {"match":"Liverpool_Tottenham Hotspur", "result":""},
    {"match":"Liverpool_West Ham United", "result":""},
    {"match":"Liverpool_Wolverhampton Wanderers", "result":""},
    {"match":"Manchester City_Arsenal", "result":""},
    {"match":"Manchester City_Aston Villa", "result":""},
    {"match":"Manchester City_Bournemouth", "result":"4–0"},
    {"match":"Manchester City_Brentford", "result":""},
    {"match":"Manchester City_Brighton & Hove Albion", "result":""},
    {"match":"Manchester City_Chelsea", "result":""},
    {"match":"Manchester City_Crystal Palace", "result":"4–2"},
    {"match":"Manchester City_Everton", "result":""},
    {"match":"Manchester City_Fulham", "result":""},
    {"match":"Manchester City_Leeds United", "result":""},
    {"match":"Manchester City_Leicester City", "result":""},
    {"match":"Manchester City_Liverpool", "result":""},
    {"match":"Manchester City_Manchester United", "result":""},
    {"match":"Manchester City_Newcastle United", "result":""},
    {"match":"Manchester City_Nottingham Forest", "result":"6-0"},
    {"match":"Manchester City_Southampton", "result":""},
    {"match":"Manchester City_Tottenham Hotspur", "result":""},
    {"match":"Manchester City_West Ham United", "result":""},
    {"match":"Manchester City_Wolverhampton Wanderers", "result":""},
    {"match":"Manchester United_Arsenal", "result":"3–1"},
    {"match":"Manchester United_Aston Villa", "result":""},
    {"match":"Manchester United_Bournemouth", "result":""},
    {"match":"Manchester United_Brentford", "result":""},
    {"match":"Manchester United_Brighton & Hove Albion", "result":"1–2"},
    {"match":"Manchester United_Chelsea", "result":""},
    {"match":"Manchester United_Crystal Palace", "result":""},
    {"match":"Manchester United_Everton", "result":""},
    {"match":"Manchester United_Fulham", "result":""},
    {"match":"Manchester United_Leeds United", "result":""},
    {"match":"Manchester United_Leicester City", "result":""},
    {"match":"Manchester United_Liverpool", "result":"2–1"},
    {"match":"Manchester United_Manchester City", "result":""},
    {"match":"Manchester United_Newcastle United", "result":""},
    {"match":"Manchester United_Nottingham Forest", "result":""},
    {"match":"Manchester United_Southampton", "result":""},
    {"match":"Manchester United_Tottenham Hotspur", "result":""},
    {"match":"Manchester United_West Ham United", "result":""},
    {"match":"Manchester United_Wolverhampton Wanderers", "result":""},
    {"match":"Newcastle United_Arsenal", "result":""},
    {"match":"Newcastle United_Aston Villa", "result":""},
    {"match":"Newcastle United_Bournemouth", "result":"1-1"},
    {"match":"Newcastle United_Brentford", "result":""},
    {"match":"Newcastle United_Brighton & Hove Albion", "result":""},
    {"match":"Newcastle United_Chelsea", "result":""},
    {"match":"Newcastle United_Crystal Palace", "result":"0–0"},
    {"match":"Newcastle United_Everton", "result":""},
    {"match":"Newcastle United_Fulham", "result":""},
    {"match":"Newcastle United_Leeds United", "result":""},
    {"match":"Newcastle United_Leicester City", "result":""},
    {"match":"Newcastle United_Liverpool", "result":""},
    {"match":"Newcastle United_Manchester City", "result":"3–3"},
    {"match":"Newcastle United_Manchester United", "result":""},
    {"match":"Newcastle United_Nottingham Forest", "result":"2–0"},
    {"match":"Newcastle United_Southampton", "result":""},
    {"match":"Newcastle United_Tottenham Hotspur", "result":""},
    {"match":"Newcastle United_West Ham United", "result":""},
    {"match":"Newcastle United_Wolverhampton Wanderers", "result":""},
    {"match":"Nottingham Forest_Arsenal", "result":""},
    {"match":"Nottingham Forest_Aston Villa", "result":""},
    {"match":"Nottingham Forest_Bournemouth", "result":"2–3"},
    {"match":"Nottingham Forest_Brentford", "result":""},
    {"match":"Nottingham Forest_Brighton & Hove Albion", "result":""},
    {"match":"Nottingham Forest_Chelsea", "result":""},
    {"match":"Nottingham Forest_Crystal Palace", "result":""},
    {"match":"Nottingham Forest_Everton", "result":""},
    {"match":"Nottingham Forest_Fulham", "result":"2–3"},
    {"match":"Nottingham Forest_Leeds United", "result":""},
    {"match":"Nottingham Forest_Leicester City", "result":""},
    {"match":"Nottingham Forest_Liverpool", "result":""},
    {"match":"Nottingham Forest_Manchester City", "result":""},
    {"match":"Nottingham Forest_Manchester United", "result":""},
    {"match":"Nottingham Forest_Newcastle United", "result":""},
    {"match":"Nottingham Forest_Southampton", "result":""},
    {"match":"Nottingham Forest_Tottenham Hotspur", "result":"0–2"},
    {"match":"Nottingham Forest_West Ham United", "result":"1–0"},
    {"match":"Nottingham Forest_Wolverhampton Wanderers", "result":""},
    {"match":"Southampton_Arsenal", "result":""},
    {"match":"Southampton_Aston Villa", "result":""},
    {"match":"Southampton_Bournemouth", "result":""},
    {"match":"Southampton_Brentford", "result":""},
    {"match":"Southampton_Brighton & Hove Albion", "result":""},
    {"match":"Southampton_Chelsea", "result":"2–1"},
    {"match":"Southampton_Crystal Palace", "result":""},
    {"match":"Southampton_Everton", "result":""},
    {"match":"Southampton_Fulham", "result":""},
    {"match":"Southampton_Leeds United", "result":"2–2"},
    {"match":"Southampton_Leicester City", "result":""},
    {"match":"Southampton_Liverpool", "result":""},
    {"match":"Southampton_Manchester City", "result":""},
    {"match":"Southampton_Manchester United", "result":"0-1"},
    {"match":"Southampton_Newcastle United", "result":""},
    {"match":"Southampton_Nottingham Forest", "result":""},
    {"match":"Southampton_Tottenham Hotspur", "result":""},
    {"match":"Southampton_West Ham United", "result":""},
    {"match":"Southampton_Wolverhampton Wanderers", "result":""},
    {"match":"Tottenham Hotspur_Arsenal", "result":""},
    {"match":"Tottenham Hotspur_Aston Villa", "result":""},
    {"match":"Tottenham Hotspur_Bournemouth", "result":""},
    {"match":"Tottenham Hotspur_Brentford", "result":""},
    {"match":"Tottenham Hotspur_Brighton & Hove Albion", "result":""},
    {"match":"Tottenham Hotspur_Chelsea", "result":""},
    {"match":"Tottenham Hotspur_Crystal Palace", "result":""},
    {"match":"Tottenham Hotspur_Everton", "result":""},
    {"match":"Tottenham Hotspur_Fulham", "result":"2–1"},
    {"match":"Tottenham Hotspur_Leeds United", "result":""},
    {"match":"Tottenham Hotspur_Leicester City", "result":"6–2"},
    {"match":"Tottenham Hotspur_Liverpool", "result":""},
    {"match":"Tottenham Hotspur_Manchester City", "result":""},
    {"match":"Tottenham Hotspur_Manchester United", "result":""},
    {"match":"Tottenham Hotspur_Newcastle United", "result":""},
    {"match":"Tottenham Hotspur_Nottingham Forest", "result":""},
    {"match":"Tottenham Hotspur_Southampton", "result":"4–1"},
    {"match":"Tottenham Hotspur_West Ham United", "result":""},
    {"match":"Tottenham Hotspur_Wolverhampton Wanderers", "result":"1-0"},
    {"match":"West Ham United_Arsenal", "result":""},
    {"match":"West Ham United_Aston Villa", "result":""},
    {"match":"West Ham United_Bournemouth", "result":""},
    {"match":"West Ham United_Brentford", "result":""},
    {"match":"West Ham United_Brighton & Hove Albion", "result":"0–2"},
    {"match":"West Ham United_Chelsea", "result":""},
    {"match":"West Ham United_Crystal Palace", "result":""},
    {"match":"West Ham United_Everton", "result":""},
    {"match":"West Ham United_Fulham", "result":""},
    {"match":"West Ham United_Leeds United", "result":""},
    {"match":"West Ham United_Leicester City", "result":""},
    {"match":"West Ham United_Liverpool", "result":""},
    {"match":"West Ham United_Manchester City", "result":"0–2"},
    {"match":"West Ham United_Manchester United", "result":""},
    {"match":"West Ham United_Newcastle United", "result":""},
    {"match":"West Ham United_Nottingham Forest", "result":""},
    {"match":"West Ham United_Southampton", "result":""},
    {"match":"West Ham United_Tottenham Hotspur", "result":"1–1"},
    {"match":"West Ham United_Wolverhampton Wanderers", "result":" "},
    {"match":"Wolverhampton Wanderers_Arsenal", "result":""},
    {"match":"Wolverhampton Wanderers_Aston Villa", "result":""},
    {"match":"Wolverhampton Wanderers_Bournemouth", "result":""},
    {"match":"Wolverhampton Wanderers_Brentford", "result":""},
    {"match":"Wolverhampton Wanderers_Brighton & Hove Albion", "result":""},
    {"match":"Wolverhampton Wanderers_Chelsea", "result":""},
    {"match":"Wolverhampton Wanderers_Crystal Palace", "result":""},
    {"match":"Wolverhampton Wanderers_Everton", "result":""},
    {"match":"Wolverhampton Wanderers_Fulham", "result":"0–0"},
    {"match":"Wolverhampton Wanderers_Leeds United", "result":""},
    {"match":"Wolverhampton Wanderers_Leicester City", "result":""},
    {"match":"Wolverhampton Wanderers_Liverpool", "result":""},
    {"match":"Wolverhampton Wanderers_Manchester City", "result":"0–3"},
    {"match":"Wolverhampton Wanderers_Manchester United", "result":""},
    {"match":"Wolverhampton Wanderers_Newcastle United", "result":"1–1"},
    {"match":"Wolverhampton Wanderers_Nottingham Forest", "result":""},
    {"match":"Wolverhampton Wanderers_Southampton", "result":"1–0"},
    {"match":"Wolverhampton Wanderers_Tottenham Hotspur", "result":""},
    {"match":"Wolverhampton Wanderers_West Ham United", "result":""}
];

const selectTeam = document.getElementById("team");

const table = document.getElementById("table");

const tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];

for(let i = 0; i < teams.length; i++) {

    let obj = teams[i];

    let teamOption = document.createElement("option");
    teamOption.textContent = obj.name;
    teamOption.value = obj.name;
    selectTeam.appendChild(teamOption);

}

//get current selected team and update
selectTeam.addEventListener("change", function() {
    clear();
    calculate(selectTeam.value);
})

//clears table
function clear(){

    //clears table up until the header
    let rowCount = table.rows.length; 
    while(--rowCount - 1) table.deleteRow(rowCount);

}

//calculate row by row - team played, season 1, season 2, difference
function calculate(team){

    let sOne
    let sTwo

    //keeps track of teams with no matches
    let unmatchedTeams = [];

    //looping over season one data
    for(let i = 0; i < results21to22.length; i++) {

        sOne = results21to22[i];

        let matches = sOne.match;

        if(matches.includes(team)){

            let formattedTeam = formatTeam(team, matches);

            let row = tableBody.insertRow();

            let teamPlayed = row.insertCell(0);
            let seasonOne = row.insertCell(1);
            let seasonTwo = row.insertCell(2);
            let difference = row.insertCell(3);

            teamPlayed.innerHTML = formattedTeam;
            seasonOne.innerHTML = sOne.result;
            //seasonTwo.innerHTML = sOne.result;
            // difference.innerHTML = 'N/A';

        }
    }

    //looping over sesaon two data
    for(let i = 0; i < results22to23.length; i++) {

        sTwo = results22to23[i];

        let matches = sTwo.match;

        if(matches.includes(team)){

            let formattedTeam = formatTeam(team, matches);

            //check if team already in table
            matchTeams(formattedTeam, sTwo, unmatchedTeams);

        }
    }

    differenceTotal();

    console.log(unmatchedTeams);

}

//Formats the team played name for table
function formatTeam(team, match) {

    let formattedTeam = ""

    let splitTeam = match.split("_");
    if(splitTeam[0] == team){
        formattedTeam = splitTeam[1] + " (H)";
    } else {
        formattedTeam = splitTeam[0] + " (A)";
    }

    return formattedTeam;

}

//Matches up teams already in table
function matchTeams(formattedTeam, season, unmatchedTeams){

    //flag to check if team has a match
    hasMatch = false;

    let difference;

    //loop through rows
    for (var i = 0, row; row = table.rows[i]; i++) {
        
        if(row.cells[0].innerText == formattedTeam){

            row.cells[2].innerHTML = season.result;

            hasMatch = true;

            //get home or away
            let home = true;
            if(row.cells[0].innerText.includes('(A)')){
                home = false;
            }

            let rOne = row.cells[1].innerText.split('–');
            let rTwo = row.cells[2].innerText.split('–');

            // check if matching game
            if(row.cells[0].innerText.includes(formattedTeam)) {

                if(!row.cells[2].innerText == ""){

                    let seasonOneResult = 0;
                    let seasonTwoResult = 0;

                    if(home){
                        if(Number(rOne[0]) > Number(rOne[1])){
                            seasonOneResult = 3;
                        } else if (Number(rOne[0]) == Number(rOne[1])) {
                            seasonOneResult = 1;
                        } else {
                            seasonOneResult = 0;
                        }

                        if(Number(rTwo[0]) > Number(rTwo[1])){
                            seasonTwoResult = 3;
                        } else if (Number(rTwo[0]) == Number(rTwo[1])) {
                            seasonTwoResult = 1;
                        } else {
                            seasonTwoResult = 0;
                        }

                    } else{
                        if(Number(rOne[0]) > Number(rOne[1])){
                            seasonOneResult = 0;
                        } else if (Number(rOne[0]) == Number(rOne[1])) {
                            seasonOneResult = 1;
                        } else {
                            seasonOneResult = 3;
                        }

                        if(Number(rTwo[0]) > Number(rTwo[1])){
                            seasonTwoResult = 0;
                        } else if (Number(rTwo[0]) == Number(rTwo[1])) {
                            seasonTwoResult = 1;
                        } else {
                            seasonTwoResult = 3;
                        }
                    }

                    if(seasonTwoResult > seasonOneResult) {
                        difference = seasonTwoResult - seasonOneResult;
                    } else if(seasonTwoResult < seasonOneResult) {
                        difference = seasonTwoResult - seasonOneResult;
                    } else {
                        difference = 0;
                    }
                    
                    row.cells[3].innerHTML = difference;
                } else {
                    row.cells[3].innerHTML = "-";
                }

            }

        }

    }

    if(!hasMatch) {

        //updating array with outliers
        unmatchedTeams.push(season);

    }

    //populate table for the teams with season 2 data only
    if(unmatchedTeams.length > 6) {

        let row = tableBody.insertRow();

        let teamPlayed = row.insertCell(0);
        let seasonOne = row.insertCell(1);
        let seasonTwo = row.insertCell(2);
        let difference = row.insertCell(3);

        teamPlayed.innerHTML = formattedTeam;
        seasonOne.innerHTML = 'N/A';
        seasonTwo.innerHTML = season.result;
        difference.innerHTML = 'N/A';

    }

}

//calculates cumulative difference
function differenceTotal(){

    total = 0;

    //loop through rows
    for (var i = 2, row; row = table.rows[i]; i++) {

        if(row.cells[3].innerText != '-'){
            total += Number(row.cells[3].innerText);

            //formatting cells
            if(Number(row.cells[3].innerText) > 0){
                row.cells[3].style.backgroundColor = "lightgreen";
            } else if(Number(row.cells[3].innerText) === 0){
                row.cells[3].style.backgroundColor = "lightyellow";
            } else {
                row.cells[3].style.backgroundColor = "indianred";
            }
        }
    }

    //creating total footer
    let footerRow = tableBody.insertRow();
    footerTitle = footerRow.insertCell(0);
    footerTitle.setAttribute("colspan", "3");
    footerTitle.innerText = "Total";
    footerTitle.style.fontWeight = "bold";
    let totalCell = footerRow.insertCell(1);
    totalCell.innerText = total;

    //formatting cell
    if(Number(totalCell.innerText) > 0){
        totalCell.style.backgroundColor = "lightgreen";
    } else if(Number(totalCell.innerText) === 0){
        totalCell.style.backgroundColor = "lightyellow";
    } else {
        totalCell.style.backgroundColor = "indianred";
    }

}


//TODO:
//mix relegated/ promoted teams between seasons
//sort out data api
//Make code generic code to be reused/ clean up code
//make use of map function
//make more adaptive for more seasons
