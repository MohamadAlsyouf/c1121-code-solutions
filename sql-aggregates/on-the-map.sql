select
  count("ci"."cityId") as "cities",
  "co"."name" as "countryName"
from
  "countries" as "co"
  join "cities" as "ci" using ("countryId")
group by
  "co"."countryId"
order by "co"."name"
