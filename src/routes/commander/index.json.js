import commanders from './_commanders';

const contents = JSON.stringify(
  commanders.map(commander => {
    return commander;
  }),
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
