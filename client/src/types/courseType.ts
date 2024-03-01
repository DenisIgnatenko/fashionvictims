export type CourseType = {
    id: number;
    title: string,
    authorId: number,
    description: string,
    startDate: string,
    price: number;
}

export type CourseStyleType = {
    bgColor: string,
    img: string | null,
    direction: string,
    courseId: number,
}

export type AllCoursesType = {
    course: CourseType[]
}