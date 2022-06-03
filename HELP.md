
# generer module
    ng g module shared
    ng g module frontoffice
    ng g module backoffice
    ng g module material

# Creation des components

    ng new edacy-school-app

    ng g c shared/components/header
    ng g c shared/components/footer
    ng g c shared/components/page-not-found
  
    ng g c frontoffice/components/students
    ng g c frontoffice/components/classes
    ng g c frontoffice/components/enroll

    ng g c frontoffice/components/home
    ng g c frontoffice/components/dashboard

# Creation des services

    ng generate service shared/services/etudiant
    ng generate service shared/services/classe 
    ng generate service shared/services/enroll  
 
# dépendances

    ng add @angular/material
    npm i -s @angular/flex-layout
