const apiUrl = "https://prevision-engajamento.herokuapp.com";

class SystemService {
  static getMostActiveUser = async () => {
    const response = await fetch(`${apiUrl}/most-active-user`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  static getMostAccessedEvent = async () => {
    const response = await fetch(`${apiUrl}/most-accessed-event`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
}

export default SystemService;
