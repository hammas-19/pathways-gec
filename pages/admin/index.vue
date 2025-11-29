<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Admin Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-900">GEC Admin Panel</h1>
          <NuxtLink to="/" class="text-primary-blue hover:text-primary-green">
            ← Back to Website
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Admin Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Navigation Tabs -->
      <div class="mb-8">
        <nav class="flex space-x-4 border-b">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-4 py-3 font-medium border-b-2 transition-colors',
              activeTab === tab.id
                ? 'border-primary-blue text-primary-blue'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            ]"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>

      <!-- Leads Management (CRM) -->
      <div v-if="activeTab === 'leads'" class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">Leads Management (Mini CRM)</h2>
          <button
            @click="exportLeads"
            class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export to Excel
          </button>
        </div>

        <!-- Filters -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 class="font-semibold mb-4">Filters</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label class="block text-sm font-medium mb-1">Status</label>
              <select v-model="leadFilters.status" class="w-full px-3 py-2 border rounded-lg text-sm">
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="converted">Converted</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Country</label>
              <select v-model="leadFilters.country" class="w-full px-3 py-2 border rounded-lg text-sm">
                <option value="all">All Countries</option>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Program</label>
              <select v-model="leadFilters.program" class="w-full px-3 py-2 border rounded-lg text-sm">
                <option value="all">All Programs</option>
                <option value="MBBS">MBBS</option>
                <option value="BDS">BDS</option>
                <option value="Engineering">Engineering</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Date Range</label>
              <input v-model="leadFilters.dateFrom" type="date" class="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
          </div>
        </div>

        <!-- Leads Stats -->
        <div class="grid grid-cols-4 gap-4 mb-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="text-2xl font-bold text-blue-600">{{ leadsStats.total }}</div>
            <div class="text-sm text-gray-600">Total Leads</div>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <div class="text-2xl font-bold text-yellow-600">{{ leadsStats.new }}</div>
            <div class="text-sm text-gray-600">New Leads</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <div class="text-2xl font-bold text-green-600">{{ leadsStats.converted }}</div>
            <div class="text-sm text-gray-600">Converted</div>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <div class="text-2xl font-bold text-purple-600">{{ leadsStats.today }}</div>
            <div class="text-sm text-gray-600">Today</div>
          </div>
        </div>

        <!-- Leads Table -->
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Program</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="lead in filteredLeads" :key="lead.id" class="hover:bg-gray-50">
                <td class="px-4 py-3 whitespace-nowrap">
                  <div class="font-medium text-gray-900">{{ lead.name }}</div>
                </td>
                <td class="px-4 py-3">
                  <div class="text-sm text-gray-900">{{ lead.email }}</div>
                  <div class="text-sm text-gray-500">{{ lead.phone }}</div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm">{{ lead.country }}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm">{{ lead.programInterest }}</td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <select
                    :value="lead.status"
                    @change="updateLeadStatus(lead.id, $event.target.value)"
                    class="px-2 py-1 text-xs rounded-full border"
                    :class="{
                      'bg-yellow-100 text-yellow-800 border-yellow-200': lead.status === 'new',
                      'bg-blue-100 text-blue-800 border-blue-200': lead.status === 'contacted',
                      'bg-purple-100 text-purple-800 border-purple-200': lead.status === 'qualified',
                      'bg-green-100 text-green-800 border-green-200': lead.status === 'converted'
                    }"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="converted">Converted</option>
                  </select>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{{ lead.source }}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {{ new Date(lead.createdAt).toLocaleDateString() }}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm">
                  <button
                    @click="viewLead(lead)"
                    class="text-primary-blue hover:text-primary-green mr-2"
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="filteredLeads.length === 0" class="text-center py-8 text-gray-500">
            No leads found matching your filters.
          </div>
        </div>

        <!-- Lead Detail Modal -->
        <div
          v-if="selectedLead"
          @click="selectedLead = null"
          class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <div @click.stop class="bg-white rounded-lg max-w-2xl w-full p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-semibold">Lead Details</h3>
              <button @click="selectedLead = null" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="space-y-3">
              <div><strong>Name:</strong> {{ selectedLead.name }}</div>
              <div><strong>Email:</strong> <a :href="`mailto:${selectedLead.email}`" class="text-primary-blue">{{ selectedLead.email }}</a></div>
              <div><strong>Phone:</strong> <a :href="`tel:${selectedLead.phone}`" class="text-primary-blue">{{ selectedLead.phone }}</a></div>
              <div><strong>Country:</strong> {{ selectedLead.country }}</div>
              <div><strong>Program Interest:</strong> {{ selectedLead.programInterest }}</div>
              <div><strong>Source:</strong> {{ selectedLead.source }}</div>
              <div><strong>Status:</strong> {{ selectedLead.status }}</div>
              <div><strong>Created:</strong> {{ new Date(selectedLead.createdAt).toLocaleString() }}</div>
              <div v-if="selectedLead.message">
                <strong>Message:</strong>
                <p class="mt-1 text-gray-700 bg-gray-50 p-3 rounded">{{ selectedLead.message }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Management -->
      <div v-if="activeTab === 'gallery'" class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">Gallery Management</h2>
          <button
            @click="showAddGalleryForm = true"
            class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-green transition-colors"
          >
            + Add Image
          </button>
        </div>

        <!-- Add Image Form -->
        <div v-if="showAddGalleryForm" class="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 class="font-semibold mb-4">Add New Image</h3>
          <form @submit.prevent="addGalleryImage" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Image URL</label>
              <input
                v-model="newGalleryImage.url"
                type="url"
                required
                class="w-full px-3 py-2 border rounded-lg"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Title</label>
              <input
                v-model="newGalleryImage.title"
                type="text"
                required
                class="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Caption</label>
              <input
                v-model="newGalleryImage.caption"
                type="text"
                required
                class="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Category</label>
              <select
                v-model="newGalleryImage.category"
                required
                class="w-full px-3 py-2 border rounded-lg"
              >
                <option value="students">Students</option>
                <option value="events">Events</option>
                <option value="campus">Campus Life</option>
                <option value="graduation">Graduation</option>
              </select>
            </div>
            <div class="flex gap-2">
              <button
                type="submit"
                class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-green"
              >
                Add Image
              </button>
              <button
                type="button"
                @click="showAddGalleryForm = false"
                class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <!-- Gallery List -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="image in galleryImages"
            :key="image.id"
            class="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              :src="image.url"
              :alt="image.title"
              class="w-full h-48 object-cover rounded mb-3"
            />
            <h3 class="font-semibold mb-1">{{ image.title }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ image.caption }}</p>
            <p class="text-xs text-gray-500 mb-3">Category: {{ image.category }}</p>
            <button
              @click="deleteGalleryImage(image.id)"
              class="text-red-600 hover:text-red-800 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <!-- HSK Holders Management -->
      <div v-if="activeTab === 'hsk'" class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">HSK Top Score Holders</h2>
          <button
            @click="showAddHSKForm = true"
            class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-green transition-colors"
          >
            + Add HSK Holder
          </button>
        </div>

        <!-- Add HSK Holder Form -->
        <div v-if="showAddHSKForm" class="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 class="font-semibold mb-4">Add New HSK Holder</h3>
          <form @submit.prevent="addHSKHolder" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <input
                  v-model="newHSKHolder.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Country</label>
                <input
                  v-model="newHSKHolder.country"
                  type="text"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">HSK Level</label>
                <select
                  v-model="newHSKHolder.level"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="1">HSK 1</option>
                  <option value="2">HSK 2</option>
                  <option value="3">HSK 3</option>
                  <option value="4">HSK 4</option>
                  <option value="5">HSK 5</option>
                  <option value="6">HSK 6</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Score</label>
                <input
                  v-model.number="newHSKHolder.score"
                  type="number"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                  min="0"
                  max="300"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">University</label>
                <input
                  v-model="newHSKHolder.university"
                  type="text"
                  class="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Exam Date</label>
                <input
                  v-model="newHSKHolder.examDate"
                  type="date"
                  required
                  class="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Photo URL (optional)</label>
              <input
                v-model="newHSKHolder.photo"
                type="url"
                class="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Testimonial (optional)</label>
              <textarea
                v-model="newHSKHolder.testimonial"
                class="w-full px-3 py-2 border rounded-lg"
                rows="3"
              ></textarea>
            </div>
            <div class="flex gap-2">
              <button
                type="submit"
                class="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-primary-green"
              >
                Add HSK Holder
              </button>
              <button
                type="button"
                @click="showAddHSKForm = false"
                class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <!-- HSK Holders List -->
        <div class="space-y-4">
          <div
            v-for="holder in hskHolders"
            :key="holder.id"
            class="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-semibold text-lg">{{ holder.name }}</h3>
                <p class="text-sm text-gray-600">{{ holder.country }} • {{ holder.university }}</p>
                <p class="text-primary-blue font-semibold mt-2">
                  HSK {{ holder.level }} - Score: {{ holder.score }}/300
                </p>
                <p class="text-xs text-gray-500 mt-1">Exam Date: {{ holder.examDate }}</p>
              </div>
              <button
                @click="deleteHSKHolder(holder.id)"
                class="text-red-600 hover:text-red-800 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Management -->
      <div v-if="activeTab === 'blog'" class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Blog Management</h2>
        <p class="text-gray-600">
          Blog posts are managed as Vue files in the <code class="bg-gray-100 px-2 py-1 rounded">/pages/blog/</code> directory.
          To add a new blog post, create a new Vue file in that directory.
        </p>
      </div>

      <!-- Settings -->
      <div v-if="activeTab === 'settings'" class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Settings</h2>
        <p class="text-gray-600">
          Settings and configuration options will be available here.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: 'Admin Panel - GEC Pathways',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const tabs = [
  { id: 'leads', label: 'Leads (CRM)' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'hsk', label: 'HSK Holders' },
  { id: 'blog', label: 'Blog' },
  { id: 'settings', label: 'Settings' }
]

const activeTab = ref('leads')
const showAddGalleryForm = ref(false)
const showAddHSKForm = ref(false)

// Gallery Management
const galleryImages = ref([])
const newGalleryImage = ref({
  url: '',
  title: '',
  caption: '',
  category: 'students'
})

const fetchGalleryImages = async () => {
  try {
    const response = await fetch('/api/gallery')
    if (response.ok) {
      galleryImages.value = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch gallery:', error)
  }
}

const addGalleryImage = async () => {
  try {
    const response = await fetch('/api/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGalleryImage.value)
    })

    if (response.ok) {
      const result = await response.json()
      if (result.success) {
        galleryImages.value.unshift(result.data)
        newGalleryImage.value = {
          url: '',
          title: '',
          caption: '',
          category: 'students'
        }
        showAddGalleryForm.value = false
        alert('Image added successfully!')
      }
    }
  } catch (error) {
    console.error('Failed to add image:', error)
    alert('Failed to add image')
  }
}

const deleteGalleryImage = async (id) => {
  if (!confirm('Are you sure you want to delete this image?')) return

  try {
    const response = await fetch(`/api/gallery/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      const result = await response.json()
      if (result.success) {
        galleryImages.value = galleryImages.value.filter(img => img.id !== id)
        alert('Image deleted successfully!')
      }
    }
  } catch (error) {
    console.error('Failed to delete image:', error)
    alert('Failed to delete image')
  }
}

// HSK Holders Management
const hskHolders = ref([])
const newHSKHolder = ref({
  name: '',
  country: '',
  level: '4',
  score: 0,
  university: '',
  examDate: '',
  photo: '',
  testimonial: ''
})

const fetchHSKHolders = async () => {
  try {
    const response = await fetch('/api/hsk-holders')
    if (response.ok) {
      hskHolders.value = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch HSK holders:', error)
  }
}

const addHSKHolder = async () => {
  try {
    const response = await fetch('/api/hsk-holders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHSKHolder.value)
    })

    if (response.ok) {
      const result = await response.json()
      if (result.success) {
        hskHolders.value.unshift(result.data)
        newHSKHolder.value = {
          name: '',
          country: '',
          level: '4',
          score: 0,
          university: '',
          examDate: '',
          photo: '',
          testimonial: ''
        }
        showAddHSKForm.value = false
        alert('HSK holder added successfully!')
      }
    }
  } catch (error) {
    console.error('Failed to add HSK holder:', error)
    alert('Failed to add HSK holder')
  }
}

const deleteHSKHolder = async (id) => {
  if (!confirm('Are you sure you want to delete this HSK holder?')) return

  try {
    const response = await fetch(`/api/hsk-holders/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      hskHolders.value = hskHolders.value.filter(h => h.id !== id)
      alert('HSK holder deleted successfully!')
    }
  } catch (error) {
    console.error('Failed to delete HSK holder:', error)
    alert('Failed to delete HSK holder')
  }
}

// Leads Management
const leads = ref([])
const selectedLead = ref(null)
const leadFilters = ref({
  status: 'all',
  country: 'all',
  program: 'all',
  dateFrom: ''
})

const fetchLeads = async () => {
  try {
    const response = await fetch('/api/leads')
    if (response.ok) {
      leads.value = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch leads:', error)
  }
}

const filteredLeads = computed(() => {
  let filtered = leads.value

  if (leadFilters.value.status !== 'all') {
    filtered = filtered.filter(lead => lead.status === leadFilters.value.status)
  }

  if (leadFilters.value.country !== 'all') {
    filtered = filtered.filter(lead => lead.country === leadFilters.value.country)
  }

  if (leadFilters.value.program !== 'all') {
    filtered = filtered.filter(lead => lead.programInterest === leadFilters.value.program)
  }

  if (leadFilters.value.dateFrom) {
    filtered = filtered.filter(lead =>
      new Date(lead.createdAt) >= new Date(leadFilters.value.dateFrom)
    )
  }

  return filtered
})

const leadsStats = computed(() => {
  const today = new Date().toDateString()
  return {
    total: leads.value.length,
    new: leads.value.filter(l => l.status === 'new').length,
    converted: leads.value.filter(l => l.status === 'converted').length,
    today: leads.value.filter(l => new Date(l.createdAt).toDateString() === today).length
  }
})

const updateLeadStatus = async (id, newStatus) => {
  try {
    const response = await fetch(`/api/leads/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })

    if (response.ok) {
      const result = await response.json()
      if (result.success) {
        const leadIndex = leads.value.findIndex(l => l.id === id)
        if (leadIndex !== -1) {
          leads.value[leadIndex] = result.data
        }
      }
    }
  } catch (error) {
    console.error('Failed to update lead status:', error)
  }
}

const viewLead = (lead) => {
  selectedLead.value = lead
}

const exportLeads = async () => {
  try {
    const params = new URLSearchParams()
    if (leadFilters.value.status !== 'all') params.append('status', leadFilters.value.status)
    if (leadFilters.value.country !== 'all') params.append('country', leadFilters.value.country)
    if (leadFilters.value.program !== 'all') params.append('programInterest', leadFilters.value.program)
    if (leadFilters.value.dateFrom) params.append('dateFrom', leadFilters.value.dateFrom)

    const url = `/api/leads/export?${params.toString()}`

    // Create a temporary anchor element and trigger download
    const link = document.createElement('a')
    link.href = url
    link.download = `leads-export-${Date.now()}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Failed to export leads:', error)
    alert('Failed to export leads')
  }
}

// Load data on mount
onMounted(() => {
  fetchLeads()
  fetchGalleryImages()
  fetchHSKHolders()
})

// Watch activeTab to load data
watch(activeTab, (newTab) => {
  if (newTab === 'leads') fetchLeads()
  if (newTab === 'gallery') fetchGalleryImages()
  if (newTab === 'hsk') fetchHSKHolders()
})
</script>

<style scoped>
code {
  font-family: 'Courier New', monospace;
}
</style>
