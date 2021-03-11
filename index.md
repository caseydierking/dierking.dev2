---
layout: home.njk
title: Text Decoration
date: Last Modified
pagination:
  data: collections.blog
  size: 2
  alias: posts
---


{% for post in posts %}
  <div class="text-3xl font-extrabold hover:text-gray-700"><a href="{{ post.url | url }}">{{ post.data.title }}</a>
   <div class="text-sm font-normal text-gray-600 pt-1">{{ page.date | postDate }}</div>

  </div>
  <div class="">
    <article class="text-base text-sm font-normal">{{ post.data.description }}</span>
  </div>
{% endfor %}

{% if pagination.href.previous %}
  <div class="float-right text-indigo-600 hover:text-indigo-800 font-bold">
    <a href="{{pagination.href.previous}}">Previous Page</a>
  </div>
{% endif %}
{% if pagination.href.next %}
  <div class="float-right text-indigo-600 hover:text-indigo-800 font-bold">
      <a href="{{pagination.href.next}}">Next Page</a>
  </div>
{% endif %}
 

