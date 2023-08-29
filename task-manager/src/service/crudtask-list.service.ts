import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CRUDTaskListService implements OnDestroy {
  baseUrl = 'http://localhost:3000/taskList';
  private unsubscribe$ = new Subject();

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete;
  }

  /**
   * Crée une task
   * @param task
   * @returns
   */
  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  /**
   * Retourne un observable de la liste des tasks
   * @returns TaskList []
   */
  public read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  /**
   * Met a jour une task
   * @param id
   * @returns
   */

  updateById(id: number, taskToUpdate: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${id}`, taskToUpdate);
  }

  /**
   * Supprime une task par son id
   */
  deleteById(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/${id}`);
  }
}
