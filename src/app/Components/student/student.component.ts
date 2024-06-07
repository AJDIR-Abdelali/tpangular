import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../Services/etudiant.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  etudiantList: any[] = [];
  newEtudiant: any = {};
displayedColumns: any;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.etudiantService.getEtudiantData()
      .then(data => {
        this.etudiantList = data || [];
      });
  }

  addEtudiant(): void {
    this.etudiantService.ajouterEtudiantData(this.newEtudiant)
      .then(() => {
        this.getEtudiants(); // Reload the list after adding
        this.newEtudiant = {}; // Clear form after adding
      });
  }
}
