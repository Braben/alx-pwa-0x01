## API Overview

Collection of information for movies, tv-shows, actors. Includes youtube trailer url, awards, full biography, and many other usefull informations. This api provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members. Support developers: https://www.buymeacoffee.com/SAdrian13

## API Version

Version 1.00

## Available Endpoints

Every endpoint returns and object with 'results' key. Endpoints with pages has additional keys -> 'page', 'next', 'entries'

ALL query parameters are OPTIONAL

### Titles

Query parameters and model are explain below, in 'Description Of Optionals Query Parameters' and 'Description Of The Information (Models)'
Titles - Multiple:

GET
/titles/series/{seriesId}

GET
/titles/x/upcoming

GET
/titles/{id}/ratings

GET
/titles/series/{seriesId}/{season}

GET
/titles/episode/{id}

GET
/titles/x/titles-by-ids

GET
/titles/{id}/aka

GET
/titles/random

GET
/titles/{id}

GET
/titles

GET
/titles/seasons/{seriesId}

### Search

GET
Search by imdb id
Search by imdb id
/titles/{id}
Search by imdb id
/titles/{id}

GET
/titles/search/akas/{aka}

GET
/titles/search/keyword/{keyword}

GET
/titles/search/title/{title}

### Actors

GET
/actors/random
/actors/random
/actors/random

GET
/actors/{id}

GET
/actors

### Utils

GET
/titles/utils/genres
/titles/utils/genres
/titles/utils/genres

GET
/titles/utils/lists

GET
/titles/utils/titleTypes

### Description of optional query parameters:

\* Endpoints with 'multiple' query parameters can use all of the below

info STRING
default: mini\_ info
description : option to get specific informations
there is some predefinded options (exemple below) :
base_info
mini_info
image
creators_directors_writers
revenue_budget
extendedCast
rating
awards
IMPORTANT : in the info query parameter can be used, beside of predefined options above, ANY key of the title object (ex object in 'Description of the information' no.4 )
limit NUMBER
default: 10
description: number of objects per page (max 50)
page NUMBER
default: 1
titleType STRING
default : -
description : options for this field from /title/utils/titleTypes ( Utils -> TitleTypes)
startYear NUMBER
default : -
description: filter by year with range, start range in this field
endYear NUMBER
default : -
description: filter by year with range, end range in this field
year NUMBER
default : -
description: filter by year, returns only titles with this year as release year
description\*\*: can`t be used with startYear / endYear
genre STRING
default : -
description: filter by genre of title, case sensitive - has to be capitalize, options for this field from /title/utils/genres ( Utils -> Genres)
sort STRING
default : -
description: sorts returned array by selected predefined options
there is 2 predefined options work in progress:
year.incr
description: sorts result by year ascending
year.decr
description: sorts result by year ascending
exact STRING
default : false
description: set the lookup to match the exact text, available only in Search - Titles by Title
list STRING
default : titles
description: predefined lists of titles (limit of 50 entries on one request).
every title in every list other that titles have an additional field position to identify the position of the title in the selected list (top)
options available in Utils - Titles Lists
there is 9 predefined options :
most_pop_movies
description: Top 10.000 most popular movies, according to imdb ranking
most_pop_series
description: Top 10.000 most popular series, according to imdb ranking
top_boxoffice_200
description: Top 200 all time box office movies, according to boxofficemojo
top_boxoffice_last_weekend_10
description: Top 10 box office of the last weekend, according to imdb ranking
top_rated_250
description: Top 250 movies by rating, according to imdb ranking
top_rated_english_250
description: Top 250 english movies by rating, according to imdb ranking
top_rated_lowest_100
description: Top 100 lowest rated movies, according to imdb ranking
top_rated_series_250
description: Top 250 series by rating, according to imdb ranking
titles
description: The entire collection with over 9.000.000 movies, series and episodes default

### Exemple of predefinded info options:

base_info exemple

titleText: ... , id: ... , primaryImage: ... , titleType: ... , releaseDate: ... , genres: ... , runtime: ... , plot: ... , meterRanking: ... , ratingsSummary: ... , episodes: ... , series: ...

mini_info exemple

titleText: ... , id: ... , primaryImage: ... , titleType: ... , releaseDate: ...

image exemple

id: ... , primaryImage: ...

creators_directors_writers exemple

id: ... , creators: ... , directors: ... , writers: ...

revenue_budget exemple

id: ... ,<br /> productionBudget: ... , lifetimeGross: ... , openingWeekendGross: ... , worldwideGross: ...

extendedCast exemple

id: ... , cast: ...

rating exemple

id: ... , ratingsSummary: ...

awards exemple

id: ... , wins: ... , nominations: ... , prestigiousAwardSummary: ...

### Description of the information (models)

(model) rating object contains 3 keys:

exemple of ratings object:

tconst:"tt0000003" averageRating:6.5 numVotes:1631

(model) light episode contains 4 keys:

exemple of light episode object:

tconst:"tt0020666" parentTconst:"tt15180956" seasonNumber:1 episodeNumber:2

(model) actor contains 6 keys:

exemple of actor object:

nconst:"nm0000001" primaryName:"Fred Astaire" birthYear:1899 deathYear:1987 primaryProfession:"soundtrack,actor,miscellaneous" knownForTitles:"tt0050419,tt0053137,tt0072308,tt0031983"

(model) title object contains around 58 keys, this can be obtained thru INFO query parameter (described above)

Titles refers to movies, series and episodes

## Request and Response Format

Titles - Multiple:
-- path: /titles
description: returns array of titles according to filters / sorting query parameters provided
query parameters: multiple, unique query parameter 'list' that sets the collection you want to query - options available in Utils - Titles Lists
model: title
Titles - By List of Id's:
-- path: /x/titles-by-ids
description: returns array of titles according to array of id's provided
query parameters: - info - list ( unique query parameter that sets the collection you want to query) - options available in Utils - Titles Lists - idsList ( the list of id's, must be an array of strings)
model: title
Title
-- path: /titles/{id}
path parameter (required) : id -> imdb id of title
description: returns title acording to filters / sorting query parameters provided
query parameters: info
model: title
Title Rating
-- path: /titles/{id}/ratings
path parameter (required) : id -> imdb id of title
description: returns title rating and votes number
query parameters: -
model: rating

## Authentication

## Error Handling

## Usage Limits and Best Practices
