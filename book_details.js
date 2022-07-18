const bookDetails = {
  template: `

<ul class="list-group">
    <li class="list-group-item">Name: {{ $route.params.name }}</li>
    <li class="list-group-item">Isbn: {{ $route.params.isbn }}</li>
    <li class="list-group-item">Author: {{ $route.params.author }}</li>
    
</ul>


`,
};
