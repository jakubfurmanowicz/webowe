import { TeacherRole } from "./teacher-role";

export interface Teacher {
    firstName: string,
    lastName: string,
    role: TeacherRole, // Musi być import u góry
    subjects: string[],
    room: number
}
