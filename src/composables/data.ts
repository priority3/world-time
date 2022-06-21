import timezonesRaw from 'timezones.json';

export const timezones = timezonesRaw.flatMap(i => {
  return i.utc.map((u) => {
    return {
      name: u,
      offset: i.offset,
      abbr: i.abbr,
      isdst: i.isdst
    }
  })
})
