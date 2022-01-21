export const getPackages = async() => {

    const url = "http://localhost:4500/packages";

    const res = await fetch(url);

    const packages = await res.json();

    return packages;

}