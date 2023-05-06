# taller04

* Crear una base de datos en couchdb llamada **instituciones**; con la información del archivo **instituciones_0007.json**
* Generar en la base de datos una vista que tenga la siguiente estructura en el **emit**
```
  emit(doc.CANTON, doc)

```
* Generar una página html que tenga la siguientes opciones
  * Botón llamado **all información** ; debe presentar la información de la vista generada en una tabla html
  * Botón llamado **buscar por cantón** ; debe tomar el valor ingresado en una input-text y obtener de la vista solo los documentos que tengan en su llave el cantón ingresado; debe presentar la información de la vista generada en una tabla html
  * Botón llamado **buscar por límite** ; debe tomar el valor ingresado en una input-text y obtener de la vista solo el número de documentos se haya ingresado; debe presentar la información de la vista generada en una tabla html
