<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div id="app">
        <ul class="flex flex-col items-center">
            @foreach ($posts as $post)
            <li class="mb-2 border-b-2">{{ $post->content }}</li>
            @endforeach
        </ul>

        <div class="paginate flex justify-center mt-4">
            {{ $posts->withQueryString()->links() }}
        </div>
    </div>
</x-app-layout>
