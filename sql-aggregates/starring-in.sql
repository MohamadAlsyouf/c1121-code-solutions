select
"g"."name" as "genre",
  count("g"."genreId") as "totalFilms"
from
  "genres" as "g"
  join "filmGenre" as "fG" using ("genreId")
  join "castMembers" as "cM" using ("filmId")
  join "actors" as "a" using ("actorId")
where
  "firstName" = 'Lisa'
  and "lastName" = 'Monroe'
group by
  "g"."name"
