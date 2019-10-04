import commanders from './_commanders';

const lookup = new Map();
commanders.forEach(commander => {
  lookup.set(commander.name, JSON.stringify(commander));
});

export function get(req, res, next) {
  const {name} = req.params;

  if (lookup.has(name)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(lookup.get(name));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      }),
    );
  }
}
