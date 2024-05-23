import { Router } from "express";

const rutaPago = Router();

rutaPago.get("/pago", () => {console.log("Show");});
rutaPago.get("/pago/:id", () => {console.log("List");});
rutaPago.post("/pago", () => {console.log("Insert");});
rutaPago.put("/pago", () => {console.log("Update");});
rutaPago.delete("/pago", () => {console.log("Delete");});

export default rutaPago;












