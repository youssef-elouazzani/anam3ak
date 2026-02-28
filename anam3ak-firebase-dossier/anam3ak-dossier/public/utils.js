import { moroccoCities } from "./cities.js";

export function fillCities(selectEl) {
  selectEl.innerHTML = `<option value="">اختار المدينة...</option>` + [...moroccoCities]
    .sort((a,b)=>a.localeCompare(b,'ar'))
    .map(c=>`<option>${c}</option>`).join("");
}

export function sanitizeText(s){ return String(s||"").replace(/[<>]/g, "").trim(); }

export function isValidMoroccoPhone(p){
  const x = String(p||"").replace(/\s+/g,"");
  return /^0[5-7]\d{8}$/.test(x);
}

export function toast(el, text, type="info"){
  el.className = "mt-4 text-sm font-black";
  if(type==="ok") el.classList.add("text-emerald-700");
  else if(type==="err") el.classList.add("text-red-600");
  else el.classList.add("text-slate-700");
  el.textContent = text;
}
