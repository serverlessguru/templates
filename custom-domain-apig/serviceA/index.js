module.exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};