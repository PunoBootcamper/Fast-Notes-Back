
import { Note } from "../models/Note.js";

export const createNote = async(req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json({
            message: "Note created successfully",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
}

export const getNotes = async(req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({
            message:notes
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
export const getNote = async(req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }
        res.status(200).json({
            message: note,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const updateNote = async(req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }
        note.title = req.body.title ||note.title;
        note.description = req.body.description || note.description;
        note.date = req.body.date || note.date;
        note.user = req.body.user || note.user;
        await note.save();
        res.status(200).json({
            message: "Note updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}   

export const deleteNote = async(req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }
        await note.deleteOne();
        res.status(200).json({
            message: "Note deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}