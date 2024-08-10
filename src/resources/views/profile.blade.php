<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Profile') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    {{-- ユーザー名とメールアドレスを編集するフォーム作成 --}}
                    <form method="POST" action="{{ route('user.update', ['user' => $user->id]) }}">
                        @csrf
                        <div>
                            <x-label for="name" :value="__('名前')" />

                            <x-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name', $user->name)" required autofocus />
                        </div>

                        <div class="mt-4">
                            <x-label for="email" :value="__('メールアドレス')" />

                            <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email', $user->email)" required />
                        </div>
                        <div class="mt-4">
                            <x-label :value="__('ユーザーレベル')" />{{ "Lv." . $user->level }}
                        </div>

                        <div class="flex items justify-end">
                            <x-button class="ml-4">
                                {{ __('更新') }}
                            </x-button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
