import reflex as rx

class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.hstack(
        rx.text(
        "J. Fernando Trujillo",
        background_image="linear-gradient(271.68deg, #EE756A 0.75%, #756AEE 88.52%)", #El fondo es un degradado
        background_clip="text", 
        font_weight="bold",
        font_size="1em",
        ),

        position="sticky", #La posición sticky hace que el elemento se quede fijo en la pantalla
        bg = "grey", #El color de fondo es gris
        padding_x="10px", #El padding es el espacio que hay entre el borde y el contenido
        padding_y="10px", #El padding es el espacio que hay entre el borde y el contenido
    )


app = rx.App()
app.add_page(index)
app.compile()