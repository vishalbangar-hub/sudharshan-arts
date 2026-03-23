import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

 const validateForm = () => {
  let newErrors: any = {};

  const nameRegex = /^[a-zA-Z]+$/;
  const phoneRegex = /^[6789][0-9]{9}$/;
  const emailRegex =
    /^[a-z0-9](?:[a-z0-9]*[._%+-]?)*[a-z0-9]@[a-z0-9.-]+\.[a-z]{2,4}$/i;

  const hasRepeatedDigits = (phone: string) => {
    return /(\d)\1{6}/.test(phone);
  };

  // NAME
  if (!formData.name) {
    newErrors.name = "Please enter your name.";
  } else if (formData.name.length < 2) {
    newErrors.name = "Minimum length is 2 characters.";
  } else if (!nameRegex.test(formData.name)) {
    newErrors.name = "Only letters allowed.";
  }

  // PHONE
  if (!formData.phone) {
    newErrors.phone = "Please enter your mobile number.";
  } else if (formData.phone.length !== 10) {
    newErrors.phone = "Enter valid 10-digit number.";
  } else if (!phoneRegex.test(formData.phone)) {
    if (!/^[6-9]/.test(formData.phone)) {
      newErrors.phone = "Number must start with 6,7,8,9.";
    } else {
      newErrors.phone = "Enter valid 10-digit number.";
    }
  } else if (hasRepeatedDigits(formData.phone)) {
    newErrors.phone =
      "Number cannot contain digit repeated more than 6 times.";
  }

  // EMAIL
  if (!formData.email) {
    newErrors.email = "Please enter email.";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Please enter valid email address.";
  }

  // MESSAGE
  if (!formData.message) {
    newErrors.message = "Message is required.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

 try {
  // 🔹 Create FormData
  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("phone", formData.phone);
  formDataToSend.append("message", formData.message);

  const response = await fetch(
    "https://staging.ccomdigital.in/client/sudarshan-arts/api/contact.php",
    {
      method: "POST",
      body: formDataToSend,
    }
  );

  if (!response.ok) {
    throw new Error("Server responded with status " + response.status);
  }

  const result = await response.json();

  if (result.status === "success") {
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  } else {
    alert("Error: " + (result.message || "Unknown server error"));
  }

} catch (error) {
  console.error("Fetch Error:", error);
  alert("Something went wrong. Check PHP API or server response.");
}
};

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  let { name, value } = e.target;

  // NAME → only letters, max 50
  if (name === "name") {
    value = value.replace(/[^a-zA-Z]/g, "");
    if (value.length > 50) return; // stop typing after 50
  }

  // PHONE → numbers only, max 10
  if (name === "phone") {
    value = value.replace(/\D/g, ""); // remove non-digits
    if (value.length > 10) return; // stop after 10 digits
  }

  setFormData({
    ...formData,
    [name]: value,
  });

  // Remove error while typing
  setErrors({
    ...errors,
    [name]: "",
  });
};

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
         {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#d4a574] mb-6"></div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#1a2332] mb-4">Let's Print Something Beautiful Together</h2>
          <p className="font-['Lora'] text-xl text-gray-700">
            Have a project in mind? We'd love to help.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={22} />
                </div>
                <div>
                  <div className="font-['Montserrat'] text-[#1a2332] mb-1 font-semibold">Address</div>
                  <p className="font-['Lora'] text-gray-600 leading-relaxed">
                    10, Wadala Udyog Bhavan, MGS road, Wadala, Mumbai - 400 031.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={22} />
                </div>
                <div>
                  <div className="font-['Montserrat'] text-[#1a2332] mb-1 font-semibold">Phone</div>
                  <p className="font-['Lora'] text-gray-600">+91 7506 354 747</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={22} />
                </div>
                <div>
                  <div className="font-['Montserrat'] text-[#1a2332] mb-1 font-semibold">Email</div>
                  <p className="font-['Lora'] text-gray-600">info@sudarshanarts.com</p> 
                  <p className="font-['Lora'] text-gray-600">anand@sudarshanarts.com</p> 
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#d4a574] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={22} />
                </div>
                <div>
                  <div className="font-['Montserrat'] text-[#1a2332] mb-1 font-semibold">Working Hours</div>
                  <p className="font-['Lora'] text-gray-600">Monday – Saturday</p>
                  <p className="font-['Lora'] text-gray-600">10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#f8f9fa] border-2 border-gray-200 rounded-sm flex items-center justify-center overflow-hidden">
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.702476520116!2d72.8471888002657!3d19.01225124157798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cee0690c64bf%3A0x96b4ad8d7efb7a46!2sWadala%20Udyog%20Bhavan!5e0!3m2!1sen!2sin!4v1768383904030!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-3">
            <div className="bg-[#f8f9fa] rounded-sm p-8 md:p-10 border-2 border-gray-200">
              <h3 className="font-['Montserrat'] text-2xl text-[#1a2332] mb-6">Send Us a Message</h3>
              <p className="font-['Lora'] text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center">
                  <div className="text-[#d4a574] text-4xl mb-3">✓</div>
                  <p>Thank you! We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-[#d4a574] focus:outline-none transition bg-white font-['Lora']"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-[#d4a574] focus:outline-none transition bg-white font-['Lora']"
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-[#d4a574] focus:outline-none transition bg-white font-['Lora']"
                  />
                  {errors.phone && <p className="text-red-500">{errors.phone}</p>}

                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-[#d4a574] focus:outline-none transition resize-none bg-white font-['Lora']"
                  />
                  {errors.message && <p className="text-red-500">{errors.message}</p>}

                  <button
                    type="submit"
                    className="w-full bg-[#d4a574] text-white px-8 py-4 rounded-sm hover:bg-[#c49563] transition-all inline-flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl font-['Montserrat'] font-medium"
                  >
                    Send Message
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}