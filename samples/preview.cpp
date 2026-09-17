#include <algorithm>
#include <iostream>
#include <optional>
#include <string>
#include <vector>

namespace avenor {

constexpr double tax_rate = 0.18;

enum class Status { active, archived };

template <typename T>
concept Priced = requires(T value) { value.price(); };

class Product final {
public:
    Product(int id, std::string name, double price, Status status)
        : id_{id}, name_{std::move(name)}, price_{price}, status_{status} {}

    [[nodiscard]] double price() const noexcept { return price_; }
    [[nodiscard]] const std::string& name() const { return name_; }

private:
    int id_;
    std::string name_;
    double price_;
    Status status_;
};

}  // namespace avenor

int main() {
    std::vector<avenor::Product> products{
        {101, "Mechanical Keyboard", 89.99, avenor::Status::active},
        {102, "USB-C Hub", 39.50, avenor::Status::archived},
    };
    std::ranges::sort(products, {}, &avenor::Product::price);
    std::cout << products.front().name() << '\n';
}
