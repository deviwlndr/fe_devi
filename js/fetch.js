import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-deviwlndr-59b3a0157dd7.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}