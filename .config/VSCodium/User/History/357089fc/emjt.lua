
-- Example of disabling some plugins. Add yours
local disabled = {
  {
   "Exafunction/codeium.vim",
  },
  {
    "wakatime/vim-wakatime"
  }
}

for i, plugin in ipairs(disabled) do
  plugin.enabled = false
end

return disabled
