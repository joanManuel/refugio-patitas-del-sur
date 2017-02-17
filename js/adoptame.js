(function () {
    var app;
    var nombre;
    $(document).ready(function () {
        return app.init();
    });
    app = {
        text: 'Adóptame! :D',
        index: 0,
        chars: 0,
        speed: 300,
        container: '.text .content',
        init: function () {
            this.chars = this.text.length;
            return this.write();
        },
        write: function () {
            $(this.container).append(this.text[this.index]);
            if (this.index < this.chars) {
                this.index++;
                return window.setTimeout(function () {
                    return app.write();
                }, this.speed);
            }
        }
    };
}.call(this));