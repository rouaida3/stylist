from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample menu items (Pizza, Cola)
menu = [
    {"id": 1, "name": "Pizza", "price": 10},
    {"id": 2, "name": "Cola", "price": 2}
]

# Orders storage
orders = []

# Endpoint to get the menu
@app.route("/menu", methods=["GET"])
def get_menu():
    return jsonify(menu)

# Endpoint to place an order
@app.route("/order", methods=["POST"])
def place_order():
    order_data = request.json
    order_items = []
    total_price = 0

    # Process the order items
    for item_id in order_data["items"]:
        item = next((item for item in menu if item["id"] == item_id), None)
        if item:
            order_items.append(item)
            total_price += item["price"]
        else:
            return jsonify({"message": f"Item with ID {item_id} not found"}), 404

    order = {
        "id": len(orders) + 1,
        "items": order_items,
        "total_price": total_price,
        "status": "Pending"
    }
    orders.append(order)
    return jsonify({"message": "Order placed successfully!", "order": order}), 201

# Endpoint to get all orders
@app.route("/orders", methods=["GET"])
def get_orders():
    return jsonify(orders)

# Start the Flask server
if __name__ == "__main__":
    app.run(debug=True)
