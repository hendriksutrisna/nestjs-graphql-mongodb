import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { CreateStudentInput } from './student.input';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query((returns) => [StudentType])
  allStudents() {
    return this.studentService.getAllStudents();
  }

  @Query((returns) => StudentType)
  studentById(@Args('id') id: string): Promise<StudentType | null> {
    return this.studentService.getStudentById(id);
  }
}
