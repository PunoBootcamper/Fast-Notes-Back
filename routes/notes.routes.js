import { Router } from "express";
import { createNote, deleteNote, getNote, getNotes, updateNote } from "../controller/note.controller.js";

export const notesRouter = Router();

notesRouter.post("/", createNote)
notesRouter.get("/", getNotes)
notesRouter.get("/:id", getNote)
notesRouter.put("/:id", updateNote)
notesRouter.delete("/:id", deleteNote)
