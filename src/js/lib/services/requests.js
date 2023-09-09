import $ from './../core';


async function get(url, dataFormat = 'json') {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Couldn't fetch: ${url}; status: ${res.status};`);
  }

  return res[dataFormat]();
}

async function post(url, body,dataFormat = 'json', contentType = 'application/json;charset=utf-8') {
  const res = await fetch(url, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': contentType,
    }
  });

  if (!res.ok) {
    throw new Error(`Couldn't fetch: ${url}; status: ${res.status};`);
  }

  return res[dataFormat]();
}

$.get = get;
$.post = post;
$.prototype.get = get;
$.prototype.post = post;