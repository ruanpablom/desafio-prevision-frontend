const apiUrl = "https://prevision-engajamento.herokuapp.com";

class CompaniesService {
  static getCompanies = async () => {
    const response = await fetch(`${apiUrl}/companies`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  static getCompanyActions = async companyId => {
    const response = await fetch(`${apiUrl}/company-actions/${companyId}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  static getCompanyLast20DaysActions = async companyId => {
    const response = await fetch(`${apiUrl}/last-20-days/${companyId}`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
}

export default CompaniesService;
